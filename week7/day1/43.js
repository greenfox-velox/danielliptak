'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

function get_rid_of_odds(list) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      new_list.push(list[i])
    }
  }
  return new_list;
}

console.log(get_rid_of_odds(numbers));
