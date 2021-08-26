const fs = require('fs').promises;

const onlyFamily = async () => {
  const onlyFamily = await fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter(({ id }) => id >= 1 && id <= 4));

  fs.writeFile('simpsonFamily.json', JSON.stringify(onlyFamily));

};

onlyFamily();