const net = require('net');

const server = net.createServer((connection) => {
  connection.push(connection);
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });
});

server.listen(5000, () => {
  console.log('escutando na porta 5000')
});
