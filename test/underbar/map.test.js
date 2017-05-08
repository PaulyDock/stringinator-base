const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
  });
});

/*
describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    expect(_.each([3, 4, 5], function(num, index, array) {
      return [num * num, index, array];
    })).toEqual([
                [9, 0, [3, 4, 5]],
                [16, 1, [3, 4, 5]],
                [25, 2, [3, 4, 5]]
                ]);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    expect(_.each([3, 4, 5], function(num, index, array) {
      return [num * num, index, array];
    })).toEqual([
                [9, 0, [3, 4, 5]],
                [16, 1, [3, 4, 5]],
                [25, 2, [3, 4, 5]]
                ]);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const res = [];
    expect(_.each([3, 4, 5], function(num, index, array) {
      return [num * num, index, array];
    })).toEqual([
                [9, 0, [3, 4, 5]],
                [16, 1, [3, 4, 5]],
                [25, 2, [3, 4, 5]]
                ]);
  });
  */
