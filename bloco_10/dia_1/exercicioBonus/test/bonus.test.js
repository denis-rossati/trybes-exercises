const { searchEmployee, professionalBoard } = require('../bonus');

describe('Testando a função searchEmployee', () => {
  it('should return searchEmployee as a funtion', () => expect(typeof searchEmployee).toBe('function'));
  it('should throw a error "ID não identificada"', () => expect(() => searchEmployee('000000', ['Ana', 'Gates', ['UX', 'Design']])).toThrow('ID não identificada'));
  it('should throw a error "Informação indisponível"', () => expect(() => searchEmployee('8579-6', ['Ana', 'Gates', ['XX', 'XXXXXX']])).toThrow('Informação indisponível'));
  it('should return the first Object', () => expect(searchEmployee('8579-6', ['Ana', 'Gates', ['UX', 'Design']])).toStrictEqual(professionalBoard[0]));
});