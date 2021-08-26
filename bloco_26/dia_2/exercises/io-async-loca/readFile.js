const fs = require('fs');

const arquivo = 'meu-arquivo.txt';

fs.readFile(arquivo, 'raw buffer', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${arquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});