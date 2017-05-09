const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 3, 4, 5, 2, 3, 4, 6];
    expect(_.uniq(nums)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});