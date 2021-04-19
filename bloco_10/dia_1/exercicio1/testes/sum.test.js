const sum = require('../sum');

describe('Testes do arquivo sum', () => {
  test('Testando a soma de 4 e 9, deve retornar 13', () => expect(sum(4, 9)).toBe(13));
  test('Testando a soma de 0 e 0, deve retornar 0', () => expect(sum(0, 0)).toBe(0));
  test('Testando a soma de 4 e "5", deve retornar um erro', () => expect(() => sum(4, '5')).toThrow());
  test('Testando a soma de 4 e "5", deve mandar uma mensagem', () => expect(() => sum(4, '5'))
  .toThrow('parameters must be numbers'));
})