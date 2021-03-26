const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.deepStrictEqual(sum(4, 5), 9, 'erro, 4 + 5 é 9');
assert.deepStrictEqual(sum(0, 0), 0, 'erro, 0 + 0 é 0');
assert.throws(() => sum(4, '5') );
assert.throws(() => sum(4, '5'),
 /^Error: parameters must be numbers$/);
