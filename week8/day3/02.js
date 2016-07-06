'use strict';

// create a function takes three parameters:
//  - fileName: the name of the file
//  - letter: a character
//  - cb: callback (with two parameters: error and the result)
//
// it should read the file and count the letters in the content
// and it should call the callback with the counted number
// if there is some error it should call the callback with the error
//

var fs = require('fs');

function countLetter(filename, letter, cb) {
  fs.readFile(filename, function (err, rawContent) {
    var letterList = String(rawContent).split('');
    var counter = 0;
    for (var i = 0; i < letterList.length; i++) {
      if (letterList[i] === letter) {
        counter++;
      }
    }
    cb(null, counter);
  });
}


countLetter('kecske.txt', 'e', function (err, num) {
  console.log(num);
});
