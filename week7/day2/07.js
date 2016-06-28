'use strict';

var numbers = [5, 11, 29, 121];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

// var isPrime = function(input) {
//   console.log(input);
//   for (var i = 3; i < input; i++) {
//     return input % i === 0;
//   }
// }

function trueOrFalse(string) {
  return string.every (function (input) {
    for (var i = 3; i < input; i++) {
      console.log(i);
      return input % i === 0;
    };
  });
}

console.log(trueOrFalse(numbers));
