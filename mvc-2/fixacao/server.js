// esse cara vai ser responsável por implementar os sockets
const net = require('net');

// o createServer expõe métodos para lidar com eventos no servidor
const server = net.createServer((conn) => {
  console.log('conectado');

  // o método "on" escuta um evento, quando ativado, executad a callback
  conn.on('end', () => {
    console.log('desconectado');
  });

  // na conexão aberta, temos algumas opões disponíveis, uma delas é devolver uma mensagem pro cliente.
  conn.write('Mensagem do server :D');
  conn.pipe(conn);

});

const PORT = 5000;

server.listen(PORT, () => console.log(PORT));


// temos outros métodos disponíveis aqui: https://nodejs.org/api/net.html#net_event_close_1

// Esses parecem úteis:

/* 
  close >
    "hadError": <boolean> | true, se o socket tiver um erro de transmissão.
    é emitido quando o socket tá totalmente fechado. O "hadError" é um booleano indicando se o socket foi fechado devido um erro.

  connect >
    Emitido quando uma conexão é estabelecida

  data >
    "Buffer" | <string>, emitido quando dados são recebidos, a codificação dos dados pode ser definida por "socket.setEnconding()"
    Os dados são perdidos se não tiver um ouvinte se o socket emitir um evento

  drain >
    Emititdo se o buffer de gravação tá vazio.

  end >
    Emitido se o outro lado do socket enviar um 'FIN'. Por padrão, o allowHalfOpen é false.
    O socket destrói seu descritor de arquivo depois de grava a fila de gravação. Mas se o allowHalfOpen estiver aberto, o lado gravável do socket não vai ter um "end()" automaticamente,
    permitindo o usuario a gravar qualquer quantidade de dados.

  error >
    Chama o "close" diretamente quando há um erro em um evento

  lookup >
    "err": <Erro> | <nulo> - objeto de eror
    "address": <string> - endereço IP
    "family": <string> | <null> - tipo de endereço
    "host": <string> - nome do host
    é emitido após resolver o host, mas apenas antes de se conectar.

  ready >
    emitido quando um socket está pronto para ser usado
    disparado logo após o 'conn'


  timeout >
    emitido se o socket passar de um tempo inativo. O usuário pode fechar manualmente a conexão se o socket avisar que está ocioso.

    */

