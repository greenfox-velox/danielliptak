'use strict';

var Car = ( function() {
  var Id = 0;
  return function car(type, colour, balance) {
    this.Id = Id++;
    this.types = type;
    this.colour = colour;
    this.balance = balance;
    this.enterDate = 0;
  };
})();

Car.prototype.enter = function (enterDate) {
  this.enterDate = enterDate.getTime();
};

Car.prototype.getEnterDate = function () {
  return this.enterDate;
};

Car.prototype.leave = function (price) {
  this.balance -= price;
};

Car.prototype.getStats = function () {
  return 'Type: ' + this.types + ', Colour: ' + this.colour + ', Balance: ' + this.balance;
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
};

CarPark.prototype.carLeave = function (id) {
  //  - It should remove the car with the given id and it should charge from its balance

  var leavingcarindex = this.storedCars.findIndex((e) => e.Id === id);
  var t = new Date;
  var enddate = t.getTime();
  var spentTimeinHours = (enddate - this.storedCars[leavingcarindex].getEnterDate()) / 3600000;
  var fee = Math.floor(spentTimeinHours) * 40;
  this.storedCars[leavingcarindex].leave(fee);
  this.balance += fee;
  this.storedCars.splice(leavingcarindex, leavingcarindex + 1);
};
CarPark.prototype.elapseTime = function (hours) {
  this.time += hours;
};

var RozsaUtca = new CarPark(4000, new Date());

RozsaUtca.carEnter(Volvo);
RozsaUtca.carEnter(Merci);

console.log(RozsaUtca.storedCars);
Volvo.enter(new Date);


// Optional Methods:
//
// getStats()
//  - It should return a string like:
//    "Cars: 4, Time: 1234423453, Income: 1400"
//
// getParkingCarsSince(hours)
//  - It should return the number of cars that are parking since the given hours
