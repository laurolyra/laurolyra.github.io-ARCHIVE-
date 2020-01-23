const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.deepStrictEqual(sum(4,5), 9) //ok
assert.deepStrictEqual(sum(0,0), 0) //ok
assert.throws( () => sum(4,'5'), Error);//ok
assert.throws( () => sum(4,'5'), Error('parameters must be numbers'));//ok
