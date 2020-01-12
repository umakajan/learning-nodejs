const express = require('express');

const app = express();

app.use(express.static(__dirname))

const messages = [
    { name: 'Tim', message: 'hi'},
    { name: 'Jack', message: 'hello'},
]

app.get('/messages', (req, res) => {
    res.send(messages);
})

const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
})