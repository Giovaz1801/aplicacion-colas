// Establecer comunicación
var socket = io();
var label = $('#lblNuevoTicket');
 
socket.on('connect', function(){
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del Servidor');
});

socket.on('estadoActual', function( resp ){
    console.log(resp);
    label.text( resp.actual );

});

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);

    });
});

