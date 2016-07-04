'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function getLetterCnt(a) {
  if (typeof(a) !== 'string') {
    return 0;
  } else {
    return a.split('').reduce(function (acc, e) {
      acc[e] = (acc[e] + 1) || 1;
      return acc;
    },
  {});
  }
}

console.log(getLetterCnt('apple'));
module.exports.getLetterCnt = getLetterCnt;
