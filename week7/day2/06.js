
'use strict';

var numbers = [2, 5, 11, 29];

// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise

function trueOrFalse(string, letter) {
  return string.split('').some(function (e) {
     return letter == e;
  });
}

console.log(trueOrFalse('trabant', 'h'));
