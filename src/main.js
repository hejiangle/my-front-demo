var Student = require('../src/js/Student')
var Person = require('../src/js/Person')

var std1 = new Student("Frank", "Kaiser", "male", 25, 89757);
var person1 = new Person("Oliver", "Queen","male", 30);

console.log(std1.toString());
console.log(person1.toString());

console.log(std1 instanceof Person);



// First
//function A() { }

//A.prototype.show = function() {};

//module.exports = A;

//var A = require('a.js');
//var a = new A();

// Second
// module.exports = function() {
//   var A =  {
//     show: function() {}
//   };
//   A.showTwo = function() {}
//
//   return A;
// };
//
// var A = require('a.js');
// var a = new A();

// Third
// (function(){
//   global.A = function() {
//     this.prototype.show = function() {
//
//     }
//   };
//
//   return a;
// })();
//
// require('a.js');
// var a = new A();
//
//
//
//
// function createA(){
//   global.A = function() {
//     this.prototype.show = function() {
//
//     }
//   };
//
//   return a;
// }
//
// module.exports = createA();
//
//
//
// module.exports = (function(){
//   global.A = function() {
//     this.prototype.show = function() {
//
//     }
//   };
//
//   return a;
// })();
