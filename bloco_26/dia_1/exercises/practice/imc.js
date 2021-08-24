const readLine = require('readline-sync');

function scriptIMC() {
  const alturaPow = readLine.questionFloat('Qual a sua altura em metros?') ** 2;

  const peso = readLine.questionFloat('Qual seu peso em kilos?');
  
  const IMC = (peso / alturaPow).toFixed(2);

  if(IMC > 0 && IMC < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (IMC >= 18.5 && IMC < 24.9) {
    console.log("Peso normal");
  } else if (IMC >= 25 && IMC < 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (IMC >= 30 && IMC < 34.9) {
    console.log("Obesidade grau I");
  } else if (IMC >= 35 && IMC < 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade grau III e IV");
  }
}

scriptIMC();

module.exports = scriptIMC;
