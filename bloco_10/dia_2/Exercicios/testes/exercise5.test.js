beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));
//'1 - beforeEach'
//'1 - test'
//'1 - afterEach'


describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
//'2 - beforeEach'
//'2 - test'
//'2 - afterEach'

});


// Errei pois achava que os primeiros before e afterEach iam ser sobreescritos pelos before e after da linha 11/12.
// Mas, ao que entendi, o beforeEach e afterEach se aplicam aos describe também. Como se fossem globais.

// Checando a documentação, parece que é isso mesmo:
// https://jestjs.io/pt-BR/docs/setup-teardown