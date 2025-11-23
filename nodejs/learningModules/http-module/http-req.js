const {request} = require('http');

const req = request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk received: ${chunk}`);
    })
    res.on('end', () => {
        console.log('No more data in response.');
    })   
})

req.end();