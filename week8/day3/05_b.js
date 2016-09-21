'use strict';
// create a function that has 2 paramteres
//  - fileNames: an array of filenames
//  - callback
//
// it should read the files and call the callback with their content concated
// it should have the same order as the filenames
// it should pass the error as a parameter

var fs = require('fs');

function countWords(filename, cb) {
  var fullfull = '';
  filename.map((e) => {
    fullfull += fs.readFile(e, (err, words) => {
      return String(words);
    });
  });
  console.log(fullfull);
}


var filenames = ['kecske.txt', 'beka.txt'];

countWords (filenames, function(err, wholetxt){
  console.log(wholetxt);
});
