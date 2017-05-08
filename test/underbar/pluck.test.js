const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const peopleObjs = [
    {name: 'Tony', gender: 'male', age: 28},
    {name: 'Alice', gender: 'female', age: 31}
    ];
    expect(_.pluck(peopleObjs, 'age')).toEqual([28, 31]);
  });
});