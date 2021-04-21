const { expect } = require('@jest/globals');
const uppercase = require('../exercicio1');

// Não entendi o que o exercício pedia, tive que recorrer ao gabarito
describe('Testa a função uppercase', () => {
  it ('should return "ABCD"', done => {
    uppercase('abcd', (str) => {
      expect(str).toBe('ABCD');
      done();
    })
  })
});