'use sttict';

var numbers = [7, 5, 8, -1, 2];
// Write a function that returns the minimal element
// in an array (your own min function)

var min = numbers.reduce(function (x, y) {
  return (x < y) ? x : y;
});

console.log(min);
