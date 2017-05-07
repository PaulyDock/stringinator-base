const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
  expect(_.last([1, 2, 3])).toBe(3);
  });

  it('returns the last 2 elements of an array', () => {
  expect(_.last([1, 2, 3], 2)).toEqual([2, 3]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
  expect(_.last([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });
});