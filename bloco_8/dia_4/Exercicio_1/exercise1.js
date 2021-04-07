
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((arrayVazio, array) => arrayVazio.concat(array.filter((elemento) => elemento)), [])
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);