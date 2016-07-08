'use strict';

// Create a function that takes 3 parameters
//  - file1: a filename
//  - file2: a filename
//  - cb: callback (with two paramteres: error and contents)
//
// It should read both files and concat their content
// then it should call the callback with the concated contents
// if any error occures it should call the callback with an error


var fs = require('fs');

function doubleContent(readFileName, writeFileName, cb) {
  fs.readFile(readFileName, function (err, rawContent) {
    if (err) {
      return cb(err);
    }
    fs.readFile(readFileName, function (err, rawContent) {
      if (err) {
        return cb(err);
      }
    var newContent = String(rawContent).trim('\n').concat(String(rawContent));
    fs.writeFile(writeFileName, newContent, function (err) {
      if (err) {
        return cb(err);
      }
    });
    cb(null, null);
  });
}


doubleContent('kecske.txt', 'baba.txt', function (err, num) {
  console.log(num);
});
