const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
expected = [1,2,3,4,5]
// implemente seus testes aqui
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4]);
assert.notEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepEqual(myRemoveWithoutCopy([1,2,3,4,5], 6), expected);
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1,2,3,4]);