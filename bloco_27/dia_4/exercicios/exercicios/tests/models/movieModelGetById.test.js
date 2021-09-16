const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');

describe('Busca os filmes pelo ID', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();

  const payloadMovie = {
    title: 'a',
    directedBy: 'b',
    releaseYear: 1,
  }

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  })

  after(() => {
    mongoConnection.getConnection.restore();
  })

  describe('quando o ID é válido', () => {
    it('retorna um objeto', async () => {
      const filme = await MovieModel.getById('613a532d76aeed6da61b69ca');
      expect(filme).to.be.a('null');
    });

    it('o objeto deve ter as propriedades "_id", "title", "directedBy" e "releaseYear"', async () => {
      // o db em memoria começa vazio, então populamos ele assim:
      const { id } = await MovieModel.create(payloadMovie);
      // para depois podermos buscar pelo Id
      const filme = await MovieModel.getById(id);
      expect(filme).to.have.keys('_id', 'title', 'directedBy', 'releaseYear');
    });
  })
})