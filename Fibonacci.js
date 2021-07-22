// lack efficiency when the large number is input
const Fibonacci = num => {
  if (num === 1) return 1
  if (num === 2) return 1
  return Fibonacci(num - 1) + Fibonacci(num - 2)
}

const Fibonacci1 = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n < 2) return 1
  memo[n] = Fibonacci1((n - 1), memo) + Fibonacci1((n - 2), memo)
  return memo[n]
}

let t0 = new Date().getTime()
console.log(Fibonacci(40))
let t1 = new Date().getTime()
console.log("It took " + (t1 - t0) + " milliseconds.")

t0 = new Date().getTime()
console.log(Fibonacci1(40))
t1 = new Date().getTime()
console.log("It took " + (t1 - t0) + " milliseconds.")
