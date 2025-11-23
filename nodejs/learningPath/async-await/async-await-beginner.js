async function name() {
const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await posts.json();
   console.log(data);
}

name();
   
