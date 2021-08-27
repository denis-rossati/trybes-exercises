const fs = require('fs').promises;

const writeDocument = (fileName, content) => {
  try {
    fs.writeFile(fileName, content, () => {
      console.log('ok');
    });
    return 'ok';
  } catch (err) {
    console.log(err.message);
    return 'não foi possível fazer um documento'
  }
}

module.exports = writeDocument;