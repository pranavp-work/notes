const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert',
    },
    {
        id: 1,
        name: 'Marie',
    },
    {
        id: 2,
        name: 'Isaac',
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    // console.log(` ${start}`);
    next();
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
})

app.use(express.json());

app.post('/friends', (req, res) => {
    if( !req.body ) {
        return res.status(400).json({
            error: 'Missing friend name in request body'
        });
    }
        const newFriend = {
            id: friends.length,
            name: req.body.name,
        };
        friends.push(newFriend);
        res.status(201).json(newFriend);
})

app.get('/friends', (req, res) => {
    res.status(200).json(friends);
});

app.get('/friends/:friendId' , (req, res) => {
    // res.send('Hello, world!');
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({ error: 'Friend not found'});
    }

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