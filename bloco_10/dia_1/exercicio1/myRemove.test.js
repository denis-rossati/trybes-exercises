const myRemove = require('./myRemove');

/* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 */

describe('Testando a função myRemove', () => {
  const errorMessageNotExpected = 'O array passado por parametro não retorna o valor esperado'
  // O toBe não reconhece arrays/funções/objetos/tipos não primitivos 'iguais' como iguais.
  test(errorMessageNotExpected, () => expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]))
  test(errorMessageNotExpected, () => expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
  test('O array passado por parametro não sofrer alterações', () => {
    const arrayParam = [1, 2, 3];
    expect(myRemove(arrayParam, 2)).not.toEqual(arrayParam);
  });
  test(errorMessageNotExpected, () => expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]));
})