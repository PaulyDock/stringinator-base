const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      'a':'air',
      'length':1
    }
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'a':'air',
      'b':'boy',
      'c':'cat'
    }
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });
});
