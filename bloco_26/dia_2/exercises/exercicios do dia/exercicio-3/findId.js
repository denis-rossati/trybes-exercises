const fs = require('fs').promises;

async function findWithId(idChar) {
  const simpsonsObj = await fs.readFile('./simpsons.json', 'utf8')
    .then((data) => JSON.parse(data));
  const choosenSimpsons = simpsonsObj.find(({ id }) => id === idChar);
  if(typeof choosenSimpsons === 'undefined') throw new Error('Não achamos nenhum personagem');
  return (choosenSimpsons);
}


findWithId('1')
.then((ret) => console.log(ret))
.catch((err) => console.log(err.message));