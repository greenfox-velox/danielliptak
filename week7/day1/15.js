'use strict';

var o = "pneumonoultramicroscopicsilicovolcanoconiosis";
// tell how many letters o has
var counter = 0;
for (var i = 0; i < o.length; i++) {
  if (o.substring(i, i+1) == 'o') {
    counter += 1
  };
}
console.log(counter);
