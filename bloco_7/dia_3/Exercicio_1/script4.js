const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'A função não reconhece numero divisiveis por 3 e 5');
assert.deepStrictEqual(myFizzBuzz(3), 'fizz', 'A função não reconhece numeros divisiveis por 3');
assert.deepStrictEqual(myFizzBuzz(5), 'buzz', 'A funçao não reconhece numeros divisiveis por 5');
assert.deepStrictEqual(myFizzBuzz(1), 1, 'A função não reconhece numeros não divisiveis por 3 e/ou 5');
assert.deepStrictEqual(myFizzBuzz('1'), false, 'A função aceita parametros que não são números')
