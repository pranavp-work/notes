// const { send } = require('./request');
// const response = require('./response');

import { send } from './request.js';
import { read } from './response.js';

function response() {
    return read();
}

function requestData(url, data) {
    send(url, data);
    return response();
}

// console.log(module.filename);

const responseData = requestData('https://google.com', 'my data');
console.log(responseData);