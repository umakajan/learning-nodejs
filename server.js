const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// it needs to tie in with express
// we'll create a regular HTTP server with Node that will share with Express and Socket.IO
const http = require('http').Server(app);
const io = require('socket.io')(http);

const mongoose = require('mongoose');

const { dbURL } = require('./config');

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log('mongodb connected', err)
})

const messages = [
    { name: 'Tim', message: 'hi!'},
    { name: 'Jack', message: 'hello'},
]

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    });
})

app.post('/messages', (req, res) => {
    var message = new Message(req.body);

    message.save((err) => {
        if (err) {
            sendStatus(500);
        } 
        
        io.emit('message', req.body)
        res.sendStatus(200);
    });
});

io.on('connection', socket => {
    console.log('a user connected')
})

// use http server instead of express 
const server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
})