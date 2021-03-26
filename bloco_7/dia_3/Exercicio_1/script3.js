const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], ('deveria retornar [1, 2, 4]'));
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'a função não deveria retornar [1, 2, 3, 4]')

let arrayTest = [1, 2, 3];
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3], 3), arrayTest, 'o array não sofreu alterações')