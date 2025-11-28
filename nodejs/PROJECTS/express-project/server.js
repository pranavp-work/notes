const express = require('express');

const app = express();

const PORT = 3000;

app.get('/' , (req, res) => {
    res.send('Hello, world!');
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello, world!<li><ul>');
});

app.post('/messages', (req, res) => {
    res.send('Message received!');
})

app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
})