const readLine = require('readline-sync');

const avaliableChoices = ["imc", "velocidade", "loteria"];

const userChoice = readLine.keyInSelect(avaliableChoices, "Escolha um script:");

switch (userChoice) {
  case avaliableChoices.indexOf("imc"):
    const imc = require('./imc');
  case avaliableChoices.indexOf("velocidade"):
    const velocidade = require('./avgVelocity');
  case avaliableChoices.indexOf("loteria"):
    const loteria = require('./loteria');
};

console.log('fim do script...')
