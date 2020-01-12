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

mongoose.Promise = Promise;

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

app.post('/messages', async (req, res) => {

    try {
        var message = new Message(req.body);

        await message.save();
    
        console.log('saved')
        
        var censored = await Message.findOne({ message: 'badword' });
        
        if (censored) {
            console.log('censored word found', censored);
            await Message.deleteOne({ _id: censored.id})
        } else {
            io.emit('message', req.body)
        }
            
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        return console.error(error)
    } finally {
        console.log('message post called');
    }
    
    
});

io.on('connection', socket => {
    console.log('a user connected')
})

// use http server instead of express 
const server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
})