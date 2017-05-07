const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf(['a', 'b', 'c', 'd', 'e'], 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf(['a', 'b', 'c', 'd', 'e'], 'e')).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf(['a', 'b', 'c', 'd', 'e'], 'tree')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf(['a', 'b', 'c', 'b', 'e'], 'b')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf(['a', 'b', 'c', 'b', 'e'], 'b', 2)).toBe(3);
  });

});