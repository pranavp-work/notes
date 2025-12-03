const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello, world!<li><ul>')
    path.join(__dirname, '..', 'public', 'skimountain.jpg');
    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
}

function postMessage(req, res) {
    res.send('Message received!');
}

module.exports = {
    getMessages,
    postMessage,
}
