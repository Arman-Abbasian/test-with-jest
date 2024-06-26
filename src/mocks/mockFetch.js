const postListResponse = 
    [
        {body: "quia et suscipit",id: 1,title: "sunt aut "},
        {body: "suscipit",id: 2,title: "aut "}
    ];

const postSendResponse = {body: "quia et suscipit",id: 1,title: "sunt aut"};

export default async function mockFetch(url, options = {}) {
    switch (url) {
        case "http://localhost:4000/posts": {
            return {
                status: 200,
                json: async () => postListResponse,
            };
        }
        case 'http://localhost:4000/posts': {
            if (options.method === "POST" && options.body === JSON.stringify(postSendResponse)) {
                return {
                    status: 201,
                    json: async () => postSendResponse,
                };
            }
            return {
                status: 400,
                json: async () => ({ message: "Bad Request" }),
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}