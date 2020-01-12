const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// it needs to tie in with express
// we'll create a regular HTTP server with Node that will share with Express and Socket.IO
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const messages = [
    { name: 'Tim', message: 'hi!'},
    { name: 'Jack', message: 'hello'},
]

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.post('/messages', (req, res) => {
    messages.push(req.body);
    io.emit('message', req.body)
    res.sendStatus(200);
});

io.on('connection', socket => {
    console.log('a user connected')
})

// use http server instead of express 
const server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
})