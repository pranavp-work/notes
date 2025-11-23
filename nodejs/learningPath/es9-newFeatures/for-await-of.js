const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'
];

const getData = async function () {
    const requestsOfPromises = urls.map(url => fetch(url));
    for await(requests of requestsOfPromises) {
        const data = await requests.json();
        console.log(data);
    }
}

getData();