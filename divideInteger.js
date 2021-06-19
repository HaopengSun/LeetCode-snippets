// Input: dividend = 10, divisor = 3
// Output: 3

// Input: dividend = 7, divisor = -3
// Output: -2

const divideInteger = function(num1, num2) {
  return num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.floor(num1 / num2) + 1
}

const dividend = 10
const divisor = 3
const dividend1 = 7
const divisor1 = -3
console.log(divideInteger(dividend, divisor))
console.log(divideInteger(dividend1, divisor1))