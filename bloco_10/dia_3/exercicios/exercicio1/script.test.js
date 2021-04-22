let script = require('./script');

describe('#randomNumber', () => {
  script.randomNumber = jest
  .fn()
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(10)
  .mockImplementationOnce((a, b) => a / b)
  .mockImplementationOnce((a, b, c) => a * b * c)
  .mockImplementationOnce((a) => a * 2);
  
  script.randomNumber();
  it('should be called', () => expect(script.randomNumber).toHaveBeenCalled())
  it('should return 5', () => expect(script.randomNumber()).toBe(10));
  it('should be called 1 time', () => expect(script.randomNumber).toHaveBeenCalledTimes(2))
});

describe('testing other implementations', () => {
  it('should return 5', () => expect(script.randomNumber(20, 2)).toBe(10));
  it('should return 27',() => expect(script.randomNumber(3, 3, 3)).toBe(27));
  it('should return 4', () => expect(script.randomNumber(2)).toBe(4));
});