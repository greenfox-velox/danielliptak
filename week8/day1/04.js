'use strict';

// Automated CarPark system
//
// All the dates in this examples should be stored as a number
// The milliseconds lasted from 1970-01-01
//

var Car = (function() {
  var Id = 0;
  return function Car(type, colour, balance) {
    this.Id = Id++;
    this.types = type;
    this.colour = colour;
    this.balance = balance;
    this.enters = [];
  };
})();


Car.prototype.enter = function (enterDate) {
  this.enters.push(enterDate.getTime());
  return this.enters;
};

Car.prototype.getEnterDate = function () {
  return this.enters[this.enters.length - 1];
};

Car.prototype.leave = function (price) {
  this.balance -= price;
};

Car.prototype.getStats = function () {
  return 'Type: ' + this.types +', Colour: ' + this.colour + ', Balance: ' + this.balance;
};


var Volvo = new Car('volvo', 'red', 4000);
var Merci = new Car('merci', 'black', 6000);

console.log(Volvo.enter(new Date()));
console.log(Volvo.enter(new Date()));
console.log(Volvo.getStats());

function CarPark(income, startTime) {
  this.startTime = startTime;
  this.income = income;
  this.storedCars = [];
}
CarPark.prototype.carEnter = function (car) {
  this.storedCars.push(car);
  car.enter(this.startTime);
};

CarPark.prototype.carLeave = function (id) {
  //  - It should remove the car with the given id and it should charge from its balance

  var leavingcarindex = this.storedCars.findIndex(function (e, i) {
    return e.Id === id;
  });
  this.storedCars.splice(leavingcarindex, leavingcarindex + 1);
  return this.storedCars;
};
// CarPark.prototype.elapseTime = function (hours) {
//   //  - It should increment the time with the hours
//
// };

var RozsaUtca = new CarPark(4000, new Date());

RozsaUtca.carEnter(Volvo);
RozsaUtca.carEnter(Merci);

console.log(RozsaUtca.storedCars);
console.log(RozsaUtca.carLeave(0));

// The parking fee: 40 per hours (only every whole hour)

// Optional Methods:
//
// getStats()
//  - It should return a string like:
//    "Cars: 4, Time: 1234423453, Income: 1400"
//
// getParkingCarsSince(hours)
//  - It should return the number of cars that are parking since the given hours
