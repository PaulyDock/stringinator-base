const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    let evens = [2, 4, 6, 8, 10];
    expect(_.contains(evens, 6)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    let evens = [2, 4, 6, 8, 10];
    expect(_.contains(evens, 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
  });

});