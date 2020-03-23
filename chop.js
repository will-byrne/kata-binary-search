//chop(int, array_of_int)  -> int

function chop(value, collection) {
  if (collection.length === 1 && collection[0] === value) {
    return 0;
  } else {
    return -1;
  }
}

console.assert(chop(5, []) === -1);
console.assert(chop(5, [3]) === -1);
console.assert(chop(1, [1]) === 0);

// assert_equal(0,  chop(1, [1]))
//  #
//  assert_equal(0,  chop(1, [1, 3, 5]))
//  assert_equal(1,  chop(3, [1, 3, 5]))
//  assert_equal(2,  chop(5, [1, 3, 5]))
//  assert_equal(-1, chop(0, [1, 3, 5]))
//  assert_equal(-1, chop(2, [1, 3, 5]))
//  assert_equal(-1, chop(4, [1, 3, 5]))
//  assert_equal(-1, chop(6, [1, 3, 5]))
//  #
//  assert_equal(0,  chop(1, [1, 3, 5, 7]))
//  assert_equal(1,  chop(3, [1, 3, 5, 7]))
//  assert_equal(2,  chop(5, [1, 3, 5, 7]))
//  assert_equal(3,  chop(7, [1, 3, 5, 7]))
//  assert_equal(-1, chop(0, [1, 3, 5, 7]))
//  assert_equal(-1, chop(2, [1, 3, 5, 7]))
//  assert_equal(-1, chop(4, [1, 3, 5, 7]))
//  assert_equal(-1, chop(6, [1, 3, 5, 7]))
// assert_equal(-1, chop(8, [1, 3, 5, 7]))
