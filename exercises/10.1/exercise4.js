const assert = require('assert');

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}
let expected = [1,2,3,4]

// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])//ok
assert.notEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])//ok
assert.deepEqual(myRemove(expected, 5), expected)//ok