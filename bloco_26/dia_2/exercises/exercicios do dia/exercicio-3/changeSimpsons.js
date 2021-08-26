const fs  = require('fs').promises;

const changeSimpsons = async () => {
  const newSimpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter(({ id }) => id !== '6' && id !== '10'))

  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons))
    .then(() => 'arquivo escrito');

  return newSimpsons;
}

changeSimpsons()
