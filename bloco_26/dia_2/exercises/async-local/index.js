const fs = require('fs').promises;

let text = Math.random().toString();

setInterval(() => {
  text = Math.random().toString()
}, 100);

async function main() {
  try {
    await fs.writeFile('./arquivo.txt', text, { flag: 'w'});
  } catch (err) {
    console.error(err.message);
  } 
}

setInterval(() => {
  main();
}, 100);
