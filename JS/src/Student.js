var Person = require('../src/Person');

function Student(first, last, gender, age, stdId){
  Person.call(this, first, last, gender, age);
  this.stdId = stdId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.construct = Student;

//Student.prototype = new Person();

Student.prototype.setStdId = function (stdId){
  this.stdId = stdId;
}
Student.prototype.getStdId = function (){
  return this.stdId;
}
Student.prototype.toString = function (){
  return 'Name: ' + this.getName().first + '·' + this.getName().last +',\n' +'Gender: ' + this.gender + ',\n' + 'Age: '+ this.age + ',\n' + 'StudentId: ' + this.stdId + '.';
  // return 'Name: ' + this.first + '·' + this.last +',\n' +'Gender: ' + this.gender + ',\n' + 'Age: '+ this.age + ',\n' + 'StudentId: ' + this.stdId + '.'
}

module.exports = Student;
