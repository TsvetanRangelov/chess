$(document).ready(function(){
  var socket = io();
  socket.emit('changeSocket');
  socket.on("username",function(username){
  });
  var field = $("#field");

  //Set up White Pieces
  for(var i=0;i<16;++i){
    var d=$('<img>');
    if(i>7) d.attr("piece", "Pawn");
    if(i==0 || i==7) d.attr("piece", "Rook");
    if(i==1 || i==6) d.attr("piece", "Knight");
    if(i==2 || i==5) d.attr("piece", "Bishop");
    if(i==3)d.attr("piece", "Queen");
    if(i==4)d.attr("piece", "King");
    d.attr("color", "White");
    d.addClass("ui-widget-content");
    field.append(d);
  }


  //Set up Black Pieces
  for(var i=0;i<16;++i){
    var d=$('<img>');
    if(i>7) d.attr("piece", "Pawn");
    if(i==0 || i==7) d.attr("piece", "Rook");
    if(i==1 || i==6) d.attr("piece", "Knight");
    if(i==2 || i==5) d.attr("piece", "Bishop");
    if(i==3)d.attr("piece", "Queen");
    if(i==4)d.attr("piece", "King");
    d.attr("color", "Black");
    d.addClass("ui-widget-content");
    field.append(d);
  }

  $( "#field > .ui-widget-content" ).draggable({
    zIndex: 100
  });

  $("#field > .ui-widget-content ").on( "drag", function(event, ui) {
    $(this).draggable("option", "zIndex", 200);
  });


  $( "#field" ).droppable({
    drop: function( event, ui ) {
      let piece = ui.draggable;
      alert(piece.attr("piece")+" to"+String.fromCharCode(parseInt(73-event.pageX/100, 10))+parseInt((event.pageY)/100+1,10));
    }
  });
});
