const { TestScheduler } = require('@jest/core');
const { obj1, obj2, obj3 } = require('../compare');



describe('Testando o arquivo compare.js', () => {
  const errorMessage = 'Um dos objetos não é igual ao outro';
  const object = {
    title: 'My Title',
    description: 'My Description',
  };
  // o toEqual aparentemente compara os valores. Seu eu fizesse
  //   test(errorMessage, () => expect(obj1).not.toEqual(obj2));
  // o teste falharia, pois apesar das chaves conterem valores organizados de maneira diferente, eles são iguais...
  test(errorMessage, () => expect(obj1).toEqual(obj2));
  test(errorMessage, () => expect(obj2).not.toEqual(obj3));
  test(errorMessage, () => expect(obj3).not.toEqual(obj1));
})