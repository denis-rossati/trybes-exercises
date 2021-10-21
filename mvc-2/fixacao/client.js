const net = require('net');

// podemos tanto criar servers quando conectar clientes a eles
const client = net.connect({ port: 5000 }, () => {
  console.log('Cliente conectado');
});

//

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

// nesse evento temos uma serie de açoes, podemos limpar cache, atualizar banco de dados, enviar mensages, etc
client.on('end', () => {
  console.log('Desconectado do server');
})
