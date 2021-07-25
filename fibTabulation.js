const fibTabulation = n => {
  const memo = {}

  const fibNum = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1
    if (n in memo) return memo[n]
    memo[n] = fibNum(n - 1) + fibNum(n - 2)
    return memo[n]
  }

  fibNum(n)

  const result = []
  for (const key in memo) result.push(memo[key])
  console.log(result)
}

fibTabulation(30)

