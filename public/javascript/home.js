$(document).ready(function(){
  var socket = io();
  socket.emit('changeSocket');
  socket.on("username",function(username){
  });
  var field = $("#field");
  for(var i=0;i<16;++i){
    var d=$('<img>');
    d.addClass("ui-widget-content");
    field.append(d);
  }

  $( "#field > .ui-widget-content" ).draggable();
  $( "#field" ).droppable({
    drop: function( event, ui ) {
      alert("Pawn to"+String.fromCharCode(parseInt(73-event.pageX/100, 10))+parseInt((event.pageY)/100+1,10));
    }
  });
});
