const http = require('http');

const PORT = 3000;
const friends = [
    {
        id: 0,
        name: 'Pranav',
    }, 
    {
        id: 1,
        name: 'Govind',
    },
    {
        id: 2,
        name: 'Laxmi',
    }
];

const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    console.log(items);
    if( items[1] === 'friends') {
        // res.writeHead(200, {
        //     // 'Content-Type': 'text/plain',
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        // res.end('Hello, world!\n');
        // res.end(JSON.stringify({
        //     id: 1,
        //     message: "Hello, world!",
        // }));

        if( items.length === 3 ) {
            const friendIndex = +items[2];
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }

        
    } else if ( items[1] === 'others') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Others Page</h1>');
        res.write('<ul>');
        res.write('<li>Item 1</li>');
        res.write('<li>Item 2</li>');
        res.write('<li>Item 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        // res.setHeader('Content-Type', 'text/plain');
        // res.end('404 Not Found\n');
        res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})