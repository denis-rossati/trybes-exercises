
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

/* function flatten() {
  // escreva seu código aqui
  let array1 = []
  for (let x = 0; x < arrays.length; x += 1) {
    for ( let y = 0; y < arrays[x].length; y += 1) {
      array1.push(arrays[x][y])
    }
  }
  return array1
} */


function flatten() {
  // escreva seu código aqui
  arrays.map((element) => {
    
  })
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);