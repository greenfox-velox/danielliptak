'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function
function sum_elements_of_list(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sum_elements_of_list(numbers))
