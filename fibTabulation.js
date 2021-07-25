// generate memo obj and transfer it to arr
const fibTabulation = n => {
  const memo = {}

  const fibNum = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1
    if (n in memo) return memo[n]
    memo[n] = fibNum((n - 1), memo) + fibNum((n - 2), memo)
    return memo[n]
  }

  fibNum(n)

  const result = []
  for (const key in memo) result.push(memo[key])
  console.log(result)
}

// fibTabulation(30)

// push the new fibnacci number into the array directly
const fibTabulation1 = n => {
  const fibArr = [0, 1]
  if (n < 2) return fibArr[n]
  for (let i = 2; i < n; i++){
    fibArr.push(fibArr[i - 1] + fibArr[i - 2])
  }
  console.log(fibArr)
}

fibTabulation1(30)

const table = Array(10)
console.log(table) // an array of ten empty elements (undefined)

const table0 = Array(10).fill(0)
console.log(table0) // an array of ten zeros