const net = require('net');

const client = net.connect({ port: 5000 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write('Cliente número 1');
});

client.on('end', () => {
  console.log('desconectado do server')
});


