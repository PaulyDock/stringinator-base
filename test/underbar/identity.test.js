const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toEqual(5);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([1, 2, 'tree'])).toEqual([1, 2, 'tree']);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      'a':'1',
      'b':'2',
      'Tree':'3'
    }
    expect(_.identity(obj)).toEqual({
      'a':'1',
      'b':'2',
      'Tree':'3'
    });
  });
});