const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const { writeSomething, readSomething } = require('../index');

const result = 'finalizado';
const rejeicao = 'não é possivel escrever algo assim';

describe('deve retornar "ok" após escrever um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').returns(result);
  });

  after(() => {
    sinon.restore();
  });
  
  it('deveria retornar "finalizado"', async () => {
    const operacao = await writeSomething('arquivo.txt', 'eu amo a vitoria');
    expect(operacao).equals(result);
  })

});

describe('se um arquivo não for válido', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').rejects(rejeicao);
  });

  after(() => {
    sinon.restore();
  });
  it('deveria retornar "não é possivel escrever algo assim"', async () => {
    const operacao = await writeSomething('arquivo.txt', 'eu não amo a vitoria');
    expect(operacao).equals(rejeicao);
  });
});

describe('deve ler o conteudo de um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'readFile').returns('conteudo');
  });

  after(() => {
    sinon.restore();
  });

  it('e retornar o conteudo', async () => {
    const operacao = await readSomething('arquivo');
    expect(operacao).equals('conteudo');
  });
});
