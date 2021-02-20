var factorial = function(number) {
  if (number > 0) { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6));