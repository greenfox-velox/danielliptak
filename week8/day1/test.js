'use strict';

var add = require('./add');
var tape = require('tape');
var getLetterCnt = require('./01');
var getBookNmCnt = require('./02');

tape(function (t) {
  t.equal(add.add(1, 2), 3);
  t.end();
});


tape(function (p) {
  p.deepEqual(getLetterCnt.getLetterCnt('banana'), { b: 1, a: 3, n: 2 }
);
  p.end();
});

tape(function (p) {
  p.deepEqual(getLetterCnt.getLetterCnt(''), {}
);
  p.end();
});

tape(function (p) {
  p.deepEqual(getLetterCnt.getLetterCnt([]), 0
);
  p.end();
});

var students = [
  { name: 'Steve', age: 12, books: ['Lord of the Rings'] },
  { name: 'Ryan', age: 11, books: ['The funcdation'] },
  { name: 'Sheela', age: 14 },
  { name: 'Samantha', age: 56, books: ['Bambi'] },
];

tape(function (p) {
  p.equal(getBookNmCnt.getbooknmcnt(students), 3);
  p.end();
});

var students2 = [
  { name: 'Steve', age: 12, books: [] },
  { name: 'Ryan', age: 11, books: [] },
  { name: 'Sheela', age: 14 },
  { name: 'Samantha', age: 56, books: ['Bambi'] },
];

tape(function (p) {
  p.deepEqual(getBookNmCnt.getbooknmcnt(students2), 1);
  p.end();
});

var students3 = [
  { name: 'Steve', age: 12 },
  { name: 'Ryan', age: 11 },
  { name: 'Sheela', age: 14 },
  { name: 'Samantha', age: 56 },
];

tape(function (p) {
  p.deepEqual(getBookNmCnt.getbooknmcnt(students3), 0);
  p.end();
});
