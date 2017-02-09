var assert = require('assert');
var Student = require('../src/Student');

describe('Class', function() {
  describe('student', function() {
    it('should return std1', function(){
      var std1 = new Student('Oliver', 'Queen', 'male', 30);
      std1.setStdId(9527);
      assert.equal( "Oliver", std1.getName().first);
      assert.equal("Queen", std1.getName().last);
      assert.equal('male', std1.getGender());
      assert.equal(30, std1.getAge());
      assert.equal(9527, std1.getStdId());
    });
  });
});
