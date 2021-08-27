const fs = require('fs').promises;
const writeDocument = require('./index');
const sinon = require('sinon');
const { expect } = require('chai');

const retornoWrite = 'ok';

describe('Após escrever o arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').returns('ok');
  });

  after(() => {
    sinon.restore();
  });

  it('a função deverá retornar um OK', () => {
    expect(writeDocument('arquivo', 'Conteudo dele')).equals(retornoWrite);
  });
});
