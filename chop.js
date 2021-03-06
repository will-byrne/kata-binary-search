//chop(int, array_of_int)  -> int

function chop(value, collection, initialIndex) {
  initialIndex = initialIndex || 0;

  if (collection && collection.length === 0) {
    return -1;
  }
  const midway = collection.length / 2;
  if (collection[midway] === value) {
    return intitialIndex + midway;
  } else {
    if (collection[midway] > value) {
      return chop(value, collection.slice(midway), initialIndex + midway);
    } else {
      return chop(value, collection.slice(0, midway), initialIndex);
    }
  }
}

function notAChop(value, collection) {
  if (collection && collection.length === 0) {
    return -1;
  }
  let index = -1;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === value) {
      index = i;
    }
  }
  return index;
}
console.assert(chop(5, []) === -1, "empty array");
console.assert(chop(5, [3]) === -1, "single value (missing)");
console.assert(chop(1, [1]) === 0, "single value (present)");
console.assert(chop(1, [1, 3, 5]) === 0, "multivalue (present, first value)");
console.assert(chop(3, [1, 3, 5]) === 1, "multivalue (present, second value)");
console.assert(chop(5, [1, 3, 5]) === 2, "multivalue (present, third value)");
console.assert(chop(0, [1, 3, 5]) === -1, "multivalue (missing)");
console.assert(chop(0, [1, 3, 5]) === -1, "multivalue (missing)");
console.assert(chop(7, [1, 3, 5, 7]) === 3, "multivalue (fourth value)");

//  assert_equal(0,  chop(1, [1, 3, 5, 7]))
//  assert_equal(1,  chop(3, [1, 3, 5, 7]))
//  assert_equal(2,  chop(5, [1, 3, 5, 7]))
//  assert_equal(3,  chop(7, [1, 3, 5, 7]))
//  assert_equal(-1, chop(0, [1, 3, 5, 7]))
//  assert_equal(-1, chop(2, [1, 3, 5, 7]))
//  assert_equal(-1, chop(4, [1, 3, 5, 7]))
//  assert_equal(-1, chop(6, [1, 3, 5, 7]))
// assert_equal(-1, chop(8, [1, 3, 5, 7]))
