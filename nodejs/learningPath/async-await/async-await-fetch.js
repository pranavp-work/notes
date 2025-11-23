const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'
];

const getData = async function() {
    try {
        const [ posts, photos, todos, users ] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
        }))

    console.log('posts', posts);
    } catch(err) {
        console.log('Something went wrong!', err);
    }
    
}

getData();
