const { TestScheduler } = require('@jest/core');
const myFizzBuzz = require('../myFizzBuzz');

/* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
 */
describe('Testando a função myFizzBuzz', () => {
  const errorMessage = 'A função não retornou o esperado';

  test(errorMessage, () => expect(myFizzBuzz(15)).toEqual('fizzbuzz'));

  test(errorMessage, () => expect(myFizzBuzz(3)).toEqual('fizz'));

  test(errorMessage, () => expect(myFizzBuzz(5)).toEqual('buzz'));

  test(errorMessage, () => expect(myFizzBuzz(7)).toEqual(7));

  test(errorMessage, () => expect(myFizzBuzz('string')).toEqual(false));

});
