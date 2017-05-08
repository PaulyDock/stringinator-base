const _ = require('../../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to their square', () => {
    const numArray = [1, 2, 3, 4];
    expect(_.map(numArray, num => num * num)).toEqual([1, 4, 9, 16]);
  });
});
