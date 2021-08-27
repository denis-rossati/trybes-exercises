const { expect } = require('chai');
const calculaSituacao = require('../index');

describe('Quando a média for menor que 7', () => {
  it('retorna reprovado', () => {
    const resposta = calculaSituacao(1);
    expect(resposta).equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna aprovado', () => {
    const resposta = calculaSituacao(10);
    expect(resposta).equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna aprovado', () => {
    const resposta = calculaSituacao(7);
    expect(resposta).equals('aprovado');
  })
})
