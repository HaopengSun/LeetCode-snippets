const howSum = (nums, target) => {
  if (target === 0) return []
  if (target < 0) return null

  for (let num of nums){
    let remainer = target - num
    let remainerResult = howSum(nums, remainer)
    if (remainerResult !== null) return [...remainerResult, num]
  }
  return null
}

console.log(howSum([2, 3, 4], 6))


// recursive call using memo
const howSumMemo = (nums, target, memo = {}) => {
  if (target === 0) return []
  if (target < 0) return null
  if (target in memo) return memo[target]

  for (let num of nums){
    let remainer = target - num
    memo[remainer] = howSum(nums, remainer, memo)
    if (memo[remainer] !== null) return [...memo[remainer], num]
  }
  return null
}

console.log(howSumMemo([2, 3, 4], 30))
