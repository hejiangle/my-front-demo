function Person(first, last, gender, age) {
  this.first = first;
  this.last = last;
  this.gender = gender;
  this.age = age;
}

Person.prototype.getName = function(){
  var name = {
    'first' : this.first,
    'last' : this.last
  }
  return name;
}
Person.prototype.getGender = function(){
  return this.gender;
}
Person.prototype.getAge = function(){
  return this.age;
}
Person.prototype.toString = function (){
  return 'Name: ' + this.getName().first + '·' + this.getName().last +',\n' +'Gender: ' + this.gender + ',\n' + 'Age: '+ this.age + '.'
  // return 'Name: ' + this.first + '·' + this.last +',\n' +'Gender: ' + this.gender + ',\n' + 'Age: '+ this.age + ',\n' + 'StudentId: ' + this.stdId + '.'
}


module.exports = Person;
