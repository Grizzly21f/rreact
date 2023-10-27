const baseURL = 'https://jsonplaceholder.typicode.com';

const links = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    posts: (id) => `/posts/${id}`
}

export {baseURL,links};