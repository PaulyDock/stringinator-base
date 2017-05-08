const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      let nums = [1, 2, 3, 4];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      let odds = [1, 3, 5, 7];
      expect(_.every(odds, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      let odds = [1, 3, 5, 7, 8];
      expect(_.every(odds, num => num % 2 === 1)).toBe(false);
    });

  });
});