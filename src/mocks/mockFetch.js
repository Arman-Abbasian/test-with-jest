const postListResponse = 
    [
        {body: "quia et suscipit",id: 1,title: "sunt aut "},
        {body: "suscipit",id: 2,title: "aut "}
    ];

const postSendResponse = {body: "quia et suscipit",id: 1,title: "sunt aut"};

export default async function mockFetch(url) {
    switch (url) {
        case "https://jsonplaceholder.typicode.com/posts": {
            return {
                status: 200,
                json: async () => postListResponse,
            };
        }
        case 'http://localhost:4000/posts',{method: "POST",body:  JSON.stringify(postSendResponse)}: {
            return {
                status: 201,
                json: async () => postListResponse,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}