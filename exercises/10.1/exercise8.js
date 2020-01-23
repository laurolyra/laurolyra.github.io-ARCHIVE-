// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
const assert = require('assert');
function comparaNumeros (a, b) {
  if (a>b){
    return true
  }
  else {
    return false
  }
}

assert.deepEqual(typeof comparaNumeros, 'function')
assert.deepEqual(comparaNumeros(4, 5), false);
assert.deepEqual(comparaNumeros(127536, 5), true);