const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('../index.js');

const conteudo = 'Testando 1 2 3';

describe('leArquivo', () => {
  describe('quando o arquivo existe', () => {
    
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(conteudo);
    });

    after(() => {
      fs.readFileSync.restore();
    })

    const resposta = leArquivo('arquivo.txt');
    it('A resposta é uma string', () => {
      expect(resposta).a('string');
    });
    it('A resposta é igual ao conteúdo do arquivo', () => {
      expect(resposta).equals(conteudo);
    });
  });
  
  describe('quando o arquivo não existe', () => {
    it('a resposta é null', () => {
      const resposta = leArquivo('aspofksaopsf.txt');
      expect(resposta).null;
    });
  });
});