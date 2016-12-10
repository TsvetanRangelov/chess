var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    router = require('./routes/router');
    
    
server.listen(3000);


io.on('connection', function(socket){
  socket.on('login_attempt', function(username, password){
    console.log(username);
    console.log(password);
  });
});

app.use(express.static('public'));  
app.use('/', router);

