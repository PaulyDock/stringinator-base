const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([1, 3, 5, 7]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      height: 54,
      weight: 78,
      eyeColor: 'blue',
      hairColor: 'brown'
    };
    expect(_.filter(obj, value => !isNaN(value))).toEqual([54, 78]);
    //expect(_.filter(obj, entry => typeof obj[entry] === 'number')).toEqual([54, 78]);
  });

});