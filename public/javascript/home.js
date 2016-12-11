$(document).ready(function(){
  var socket = io();
  $("#login_div > form").on("submit", function(event){
    event.preventDefault();
    socket.emit('login_attempt',
     $('#login_div > #login_form > #username_field').val(),
     $('#login_div > #login_form > #password_field').val());
     return false;
  });
  socket.on("logged in",function(username){
    window.location+="home";
    console.log(username);
  });
});
