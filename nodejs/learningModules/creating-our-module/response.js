function decrypt(data) {
    return `decrypted data: ${data}`
}

function read() {
    return decrypt('data');
}

// module.exports = {
//     read,
// }

export {
    read,
}