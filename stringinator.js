const _ = require('./underbar');

const first = function(str, n = 1) {
  return n === 1 ? str[0] : _.first(str.split(''), n).join('');
};

const last = function(str, n = 1) {
  return n === 1 ? str[str.length - 1] : _.last(str.split(''), n).join('');
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), char => char === target).join('');
  // removes all instances of a letter, although removing just a single/first
  // instance would pass the provided test
};

const hasChar = function(str, target) { 
  // hint: use _.some
  // Your code goes here
};

const isOnlyDigits = function(str) {
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), char => !isNaN(parseInt(char))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};