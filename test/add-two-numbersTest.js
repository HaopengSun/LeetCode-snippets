const assert = require('chai').assert;
const { addTwoNumbers, equalLengthArr } = require('../add-two-numbers');
const equalArr = require('../equalArr');

describe('add-two-numbers js', function() {
  it ('add two numbers in array and return sum number', function() {
    const l1 = [2,4,3]
    const l2 = [5,6,4]
    const result = addTwoNumbers(l1, l2)
    const boo = equalArr(result, [7,0,8])
    assert.equal(boo. true);
  })
})