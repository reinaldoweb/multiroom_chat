/*importar configuraççoes do servidor*/

const app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(8080, function(){
  console.log('Servidor está on-line');
})

var io = require('socket.io').listen(server);
app.set('io', io);
/*Criar a conexqo com Websocket*/
io.on('connection', function(socket){
console.log('Usuario está conectado');

socket.on('disconnect', function(){
  console.log('Usuario desconectou');
  });

  socket.on('msgParaServidor', function(data){
    socket.emit(
      'msgParaCliente',
      {apelido: data.apelido, mensagem: data.mensagem}
    );
    socket.broadcast.emit(
      'msgParaCliente',
      {apelido: data.apelido, mensagem: data.mensagem}
    );


  });
});
