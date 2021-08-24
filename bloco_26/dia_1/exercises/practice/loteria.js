const readLine = require('readline-sync');

function scriptLoteria() {
  const numeroSorteado = Math.round(Math.random() * 10);
  
  const numeroUsuario = readLine.questionInt('Qual o numero sorteado?');
  
  if (numeroUsuario === numeroSorteado) {
    console.log("ACERTOU!");
  } else {
    console.log("ERROU!");
  }
}

scriptLoteria();

module.exports = scriptLoteria;
