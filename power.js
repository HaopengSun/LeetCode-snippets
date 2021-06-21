// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Input: x = 2.10000, n = 3
// Output: 9.26100

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

const power = function(x, n){
  let result = 1
  const pow = function(x, n){
    if (n > 0){
      result *= x
      pow(x, n - 1)
    }
  }
  if (n >= 0){
    pow(x, n)
  } else {
    pow(x, -n)
  }
  
  return n >= 0 ? result : 1 / result
}

const x = 2
const n = 10
console.log(power(x, n))

const x1 = 2
const n1 = -2
console.log(power(x1, n1))