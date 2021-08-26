const fs = require('fs').promises;

const objSimpsons = fs.readFile('./simpsons.json', 'utf8')
.then((data) => {
  return JSON.parse(data);
})

const mapSimpsons = objSimpsons
.then((data) => {
  data.forEach(({ id, name}) => {
    console.log(`${id} - ${name}`);
  });
})
