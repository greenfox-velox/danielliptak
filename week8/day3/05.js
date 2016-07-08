'use strict';
cd 
// create a function that has 2 paramteres
//  - fileNames: an array of filenames
//  - callback
//
// it should read the files and call the callback with their content concated
// it should have the same order as the filenames
// it should pass the error as a parameter

var fs = require('fs');

function countWords(filename, cb) {
  fs.readFile(filename, function (err, rawContent) {
    if (err) {
      return cb(err);
    }
    var fileNameList = String(rawContent).split(/\s/g)
    var contentList = [];
    fileNameList.forEach(function(e){
      fs.readFile(e, function(err, word){
        var fileWords = String(word).split(/\s/g).reduce(function(acc, e){
          acc += e;
          return acc
        }, '');
        contentList.push(fileWords);
        cb(null, contentList.join(''));
      }
    )})
  });
}


countWords ('filename.txt', function(err, wholetxt){
  console.log(wholetxt);
});
