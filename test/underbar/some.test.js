const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    let nums = [2, 4, 6, 8, 9];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    let evens = [2, 4, 6, 8];
    expect(_.some(evens, num => num % 2 === 1)).toBe(false);
  });

});