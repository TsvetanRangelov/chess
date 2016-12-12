$(document).ready(function(){
  var socket = io();
  $("#login_div > form").on("submit", function(event){
    event.preventDefault();
    socket.emit('login_attempt',
     $('#login_div > #login_form > #username_field').val(),
     $('#login_div > #login_form > #password_field').val());
     return false;
  });
  $("#reg_div > form").on("submit", function(event){
    event.preventDefault();
    if($('#reg_div > #reg_form > #password_field').val()==$('#reg_div > #reg_form > #password_field2').val()){
      socket.emit('reg_attempt',
      $('#reg_div > #reg_form > #username_field').val(),
      $('#reg_div > #reg_form > #password_field').val());
    }
    return false;
  });
  socket.on("logged in",function(username){
    window.location.href+="home"
  });
});
