// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.splice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.splice(Math.max(0, array.length - n));
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (let index = fromIndex; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  return typeof obj.length === 'number' && obj.length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let index = 0; index < obj.length; index++) {
      callback(obj[index], index, obj);
    }
  } else {
    for (let entry in obj) {
      callback(obj[entry], entry, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  const results = [];
  each(obj, (value, indexOrKey, obj) => {
    results.push(callback(value, indexOrKey, obj));
  });
  return results;
};

// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, entry => entry[key]);
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  let initializing = accumulator === undefined;
  each(obj, (currentValue, indexOrKey, iteratedObj) => {
    if (initializing) {
      accumulator = currentValue;
      initializing = false;
    } else {
      accumulator = callback(accumulator, currentValue, indexOrKey, iteratedObj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  return reduce(obj, (wasFound, currentItem) => {
    return wasFound || currentItem === target;
  }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, (allPassed, currentItem) => {
    return allPassed && !!callback(currentItem);
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, (anyPassed, currentItem) => {
    return anyPassed || !!callback(currentItem);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  const result = [];
  each(obj, item => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  return filter(arr, item => !callback(item));
/*  const result = [];
  each(obj, item => {
    if (!callback(item)) {
      result.push(item);
    }
  });
  return result;
*/
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  const dupes = [];
  const result = [];
  each(obj, item => {
    if (indexOf(dupes, item) === -1) {
      result.push(item);
    }
    dupes.push(item);
  });
  return result;
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
