const fs = require('fs');

const writeSomething = async (arquivo, conteudo) => {
  try {
    if(conteudo === 'eu não amo a vitoria') throw new Error('não é possivel escrever algo assim');
    fs.writeFile(arquivo, conteudo, () => 'finalizado');
    return 'finalizado';
  } catch (err) {
    return err.message;
  }
}

const readSomething = async (arquivo) => {
  try {
    const texto = await fs.readFile(`./arquivo.txt`, 'utf8');
    return texto;
  } catch (err) {
    return err.message;
  }
}

module.exports = {
  writeSomething,
  readSomething,
}
