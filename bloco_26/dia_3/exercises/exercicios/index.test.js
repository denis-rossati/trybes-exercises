const { expect } = require('chai');
const naturezaNumero = require('./index');

describe('Quando o numero for maior que zero', () => {
  it('retorna "positivo"', () => {
    const resposta = naturezaNumero(5);
    expect(resposta).a('string');
    expect(resposta).equals('positivo');
  });
});

describe('Quando o numero for menor que zero', () => {
  it('retorna "negativo"', () => {
    const resposta = naturezaNumero(-1);
    expect(resposta).a('string');
    expect(resposta).equals('negativo');
  });
});

describe('Quando o número for zero', () => {
  it('retorna "neutro"', () => {
    const resposta = naturezaNumero(0);
    expect(resposta).a('string');
    expect(resposta).equal('neutro');
  });
});

describe('Quando o parametro não for um número', () => {
  it('deve retornar "o valor deve ser um número"', () => {
    const resposta = naturezaNumero('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    expect(resposta).equals('o valor deve ser um número');
  })
});

