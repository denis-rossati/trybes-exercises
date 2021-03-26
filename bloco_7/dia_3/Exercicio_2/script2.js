const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (param) => {
  let lengthArray = [];
  for (let x = 0; x < param.length; x += 1) {
    lengthArray.push(param[x].length);
  }
  return lengthArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);