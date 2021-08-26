const fs = require('fs').promises;
const readline = require('readline-sync');

const choosenFile = readline.question('Qual arquivo você deseja ler?');

fs.readFile(choosenFile, 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Não existe o arquivo:', choosenFile);
  });
