const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    expect(_.reduce([3, 4, 5], (acc, val) => acc + val, 6)).toBe(18);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    expect(_.reduce([3, 4, 5], (acc, val) => acc + val)).toBe(12);
  });

});