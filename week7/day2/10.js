'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

function student() {
  this.grades = [4, 5, 2, 3, 4];
  this.addgrade = function (grade) {
    this.grades.push(grade);
  };
  this.getAverage = function () {this.grades.reduce(function (x, y) { return x += y},0)
  }
}

var Karesz = new student();
Karesz.addgrade(2);

console.log(Karesz.grades);
console.log(Karesz.getAverage());
