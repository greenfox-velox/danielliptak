'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 2, p: 2, l: 1}

function letterCounter(string) {
  var dictionary = {};
  string.split('').forEach(function(e) {
    dictionary[e] ? dictionary[e]++ : dictionary[e] = 1;
  });
  return dictionary
}


console.log(letterCounter('apple'))
