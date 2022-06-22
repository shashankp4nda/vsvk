const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) { 
res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
    socket.on('adduser', function(username){
        socket.username = username; 
        socket.room = 'room1';  
        socket.join('room1');
        socket.emit('updatechat', 'SERVER', 'you have connected to room1');
        socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
        });

        socket.on('sendchat', function (data) { 
            io.sockets.in('room1').emit('updatechat', socket.username, data);
        });
});
const server = http.listen(8080);