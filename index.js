var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    router = require('./routes/router');
    
    
    
server.listen(3000);

app.use(express.static('public'));  
app.use('/', router);

