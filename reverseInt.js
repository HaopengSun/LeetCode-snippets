// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

const reverseInt = int => {
  let minus = int > 0 ? 1 : -1
  console.log(Number((int * minus).toString().split('').reverse().join('')) * minus)
}

let x = 120
reverseInt(x)

// console.log(Number('012'))