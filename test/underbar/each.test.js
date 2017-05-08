const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = [3, 4, 5];
    let count = 0;
    _.each(array, function(num, index, array) {
      expect(array[index]).toBe(num);
      count += 1;
    })
    expect(count).toBe(array.length);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      1: 'a',
      2: 'b',
      3: 'c',
      length: 3
    };
    let count = 0;
    _.each(arrayLikeObj, function(value, property, arrayLikeObj) {
      expect(arrayLikeObj[property]).toBe(value);
      count += 1;
    })
    expect(count).toBe(arrayLikeObj.length);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const nonArrayObj = {
      color: 'blue',
      location: 'Florida',
      orientation: 'vertical'
    };
    let count = 0;
    _.each(nonArrayObj, function(value, property, nonArrayObj) {
      expect(nonArrayObj[property]).toBe(value);
      count += 1;
    })
    expect(count).toBe(3);
  });
});

