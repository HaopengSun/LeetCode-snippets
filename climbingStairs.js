// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const results = []

// can climb any steps once
const climbStair = function(n, current){
  if (n !== 0){
    for (let i = 1; i <= n; i++){
      climbStair((n - i), [...current, i])
    }
  } else {
    results.push(current)
  }
}

climbStair(3, [])
console.log(results)

// can climb only one or two steps once
const result = []
const climbStairs = function(n, current){
  if (n === 0) {
    result.push(current)
    return
  }
  if (n > 1) climbStairs((n - 2), [...current, 2])
  climbStairs((n - 1), [...current, 1])
}

climbStairs(4, [])
console.log(result)