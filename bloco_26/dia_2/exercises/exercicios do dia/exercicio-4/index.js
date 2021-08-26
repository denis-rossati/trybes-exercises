const fs = require('fs').promises;
const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const arrayToFile = () => {
  const arrayPromises = arrayStrings.map((str, index) => {
    fs.writeFile(`file${index + 1}.txt`, str);
  });

  Promise.all(arrayPromises)
  .then(() => {
    console.log('Arquivos criados!');
  });
}

const fileToString = () => {
  const filePromises = arrayStrings.map((_, i) => {
    return fs.readFile(`./file${i + 1}.txt`, 'utf8')
  });

  Promise.all(filePromises)
    .then((data) => {
      fs.writeFile('fileAll.txt', data.join(' '));      
    });
}

fileToString();

