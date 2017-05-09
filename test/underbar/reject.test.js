const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    let nums = [1, 2, 3, 4, 5];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    let obj = {
      tree: 'branch',
      olive: 'oil',
      age: 24,
      wrong: null,
      dinosaur: null
    };   
    expect(_.reject(obj, item => item === null)).toEqual(['branch', 'oil', 24]);
  });
});