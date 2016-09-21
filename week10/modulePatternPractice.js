
// REVEALING MODULE PATTERN
// const dog = (function() {
//   const sound = 'woof';
//   function talk () {
//     console.log(sound);
//   }
//   return {
//     speak: talk,
//   };
// })();
//
// dog.speak()


// PROTOTYPE PATTERN
// const dog = {
//   talk : function() {
//     console.log(this.sound);
//   },
// };
//
// var Buksi = Object.create(dog, {'sound':{value:'woof'}});
//
// Buksi.talk();


var Dog = function () {
  this.sound = 'woof';
};

Dog.prototype.talk = function () {
  console.log(this.sound);
};

var Buksi = new Dog();
Buksi.talk();
