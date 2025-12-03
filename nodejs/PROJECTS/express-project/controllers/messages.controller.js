function getMessages(req, res) {
    res.send('<ul><li>Hello, world!<li><ul>')
}

function postMessage(req, res) {
    res.send('Message received!');
}

module.exports = {
    getMessages,
    postMessage,
}
