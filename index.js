var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    fs = require('fs'),
    router = require('./routes/router'),
    HashMap = require('hashmap'),
    clients = new HashMap();
    
server.listen(3000);



io.sockets.on('connection', function(socket){


  socket.on('reg_attempt', function(username, password){
    fs.readFile('./db/users.txt',function(err, data){
      if(err){
        return console.err(err);
      }

      var users = data.toString().split('\n');
      var username_taken = false;
      for(var i = 0;i<users.length;++i){
        if(users[i].split(' ')[0]==username) username_taken=true;
      }
      if(!username_taken) fs.appendFile('./db/users.txt', "\n"+username+" "+password, function(err, data){
        if(err){
          console.log(err);
          clients.set(socket.id, username);
          socket.emit("logged in", username);
        }
      });
    });
  });


  socket.on('login_attempt', function(username, password){
    fs.readFile('./db/users.txt',function(err, data){
      if(err){
        return console.err(err);
      }
      var users = data.toString().split('\n');
      for(var i=0; i< users.length; ++i){
        if(users[i]==username+" "+password){
          clients.set(socket.id, username);
          socket.emit("logged in", username);
        }
      }
    });
  });


  socket.on('changeSocket',function(){
    if(socket.handshake.headers.cookie != undefined){
      if(clients.has(socket.handshake.headers.cookie.substring(3,socket.handshake.headers.cookie.length))){
        clients.set(socket.id, clients.get(socket.handshake.headers.cookie.substring(3,socket.handshake.headers.cookie.length)));
        clients.remove(socket.handshake.headers.cookie.substring(3,socket.handshake.headers.cookie.length));
        socket.emit("username", clients.get(socket.id));
      }
    }
  });
});


app.use(express.static('public'));  
app.use('/', router);

