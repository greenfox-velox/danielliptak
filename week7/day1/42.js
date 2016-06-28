
'use strict';

// create a function that returns it's input factorial
function factorial(input) {
  if (input == 0) {
        return 1;
  }
  else {
    return (input * factorial(input-1));
  }
}
console.log(factorial(4));
