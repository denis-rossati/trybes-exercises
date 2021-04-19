const myRemoveWithoutCopy = require('../myRemoveWithoutCopy');

/* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */

describe('Testando a função myRemoveWithoutCopy', () => {
  const errorMessageNotExpect = 'A chamada não retorna o array esperado';
  
  test(errorMessageNotExpect, () => { 
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  test(errorMessageNotExpect, () => {
    const array = [1, 2, 3, 4];
    const cursedArray = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual(cursedArray);
  });
  
  test(errorMessageNotExpect, () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual(array)
  });

  test(errorMessageNotExpect, () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array);
  })
});