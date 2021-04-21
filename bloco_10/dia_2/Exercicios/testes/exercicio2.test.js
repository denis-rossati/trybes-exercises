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