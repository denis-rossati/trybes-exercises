const fs = require('fs');

const threeParameter = (x, y, z) => {
  return new Promise((resolve, reject) => {
    if(typeof x !== 'number' || typeof y !== 'number'  || typeof z !== 'number' ) {
      reject(new Error('A função aceita apenas números'))
    }
    const result = (x + y) * z;
    if(result < 50){
      reject(new Error('Valor muito baixo'))
    }
    resolve(result);
  });
}

threeParameter(
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1),
  Math.floor(Math.random() * 100 + 1))
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))
