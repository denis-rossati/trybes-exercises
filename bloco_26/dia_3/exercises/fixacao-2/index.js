const { readFileSync } = require('fs');

const leArquivo = (nomeArquivo) => {
  try {
    const conteudoArquivo = readFileSync(nomeArquivo, 'utf8');
    return conteudoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;
