const { expect } = require('@jest/globals');
const getUserName = require('../exercicio2');

describe('Testing getUserName function', () => {
  it('should return "Mark"', () => {
    expect.assertions(1);
    return getUserName(4).then(response => expect(response).toEqual('Mark'))
  })
  it('should return a error message', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => expect(error).toBe(error));
  })
});


// tentando com async/await e try/catch na parte dos erros
describe('Testing getUserName function', () => {
  it('should return "Mark"', async () => {
    const informacao = await getUserName(4);
    return expect(informacao).toBe('Mark');
  })
  
  it('should return a error message', async () => {
    try {
      await getUserName(6);
    } catch(e) {
      expect(e).toStrictEqual({"error": "User with 6 not found."});
    }
  })
});