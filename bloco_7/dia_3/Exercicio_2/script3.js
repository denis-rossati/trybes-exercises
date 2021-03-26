const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (param) => {
  let sumNumbers = 0;
  for(let x = 0; x < param.length; x += 1) {
    sumNumbers += param[x];
  }
  return sumNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);