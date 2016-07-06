'use strict';

// create a function that takes a filename reads the content of the file
// and counts the words in it. It should not return the result, rather
// call a callback (its second parameter)
// The callback should have two parameters:
//  - err: the error object if anything wrong happened
//  - count: the word count

var fs = require('fs');

function countWords(filename, cb) {
  fs.readFile(filename, function (err, rawContent) {
    if (err) {
      return cb(err);
    }
    cb(null, String(rawContent).split(/\s/g).length - 1);
  });
}

countWords('filename.txt', function (err, count) {
  console.log(count);
});
