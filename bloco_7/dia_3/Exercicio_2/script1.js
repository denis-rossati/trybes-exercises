const assert = require('assert');
// escreva a função addOne aqui
function addOne(param) {
  let newArray = [];
  for (let x = 0; x < param.length; x += 1) {
    newArray.push(param[x])
  }
  for(let x = 0; x < newArray.length; x += 1) {
    newArray[x] = newArray[x] + 1;
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);