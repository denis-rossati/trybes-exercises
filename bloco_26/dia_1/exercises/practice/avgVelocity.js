const readLine = require('readline-sync');

function avgVelocity() {
  const tempo = readLine.questionInt('Qual o tempo da viagem em segundos?');
  const distancia = readLine.questionInt('Qual a distancia em metros?');
  console.log("A velocidade média é", distancia / tempo);
}

avgVelocity();

module.exports = avgVelocity;
