const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    // console.log(` ${start}`);
    next();
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} - ${duration}ms`);
})

app.use(express.json());

app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
})