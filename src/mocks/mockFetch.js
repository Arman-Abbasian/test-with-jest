const postListResponse = {
    data:[
        {body: "quia et suscipit",id: 1,title: "sunt aut ",userId: 1},
        {body: "suscipit",id: 2,title: "aut ",userId: 2}],
};

export default async function mockFetch(url) {
    switch (url) {
        case "https://jsonplaceholder.typicode.com/posts": {
            return {
                status: 200,
                json: async () => postListResponse,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}