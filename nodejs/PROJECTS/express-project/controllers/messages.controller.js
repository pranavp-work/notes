const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello, world!<li><ul>')
    path.join(__dirname, '..', 'public', 'skimountain.jpg');
    // res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
    res.render('messages', {
        title: 'Messages Page',
        friend: 'Pranav',
    })
}

function postMessage(req, res) {
    res.send('Message received!');
}

module.exports = {
    getMessages,
    postMessage,
}
