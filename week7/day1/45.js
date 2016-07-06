'use strict';

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

var shortest = names.reduce(function (x, y) {
  return (x.length < y.length) ? x : y;
});

console.log(shortest);
