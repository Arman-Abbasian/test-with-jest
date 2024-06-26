const postListResponse = 
    [
        {body: "quia et suscipit",id: 1,title: "sunt aut "},
        {body: "suscipit",id: 2,title: "aut "}
    ];

const postSendResponse = {body: "quia et suscipit",id: 1,title: "sunt aut"};

export default async function mockFetch(url, options = {}) {
    
    switch (url) {
        case 'http://localhost:4000/posts': {
                return {
                    ok:true,
                    status: 200,
                    json: async () => postListResponse,
                };
            
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}