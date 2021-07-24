const bestSum = (nums, target) => {
  if (target === 0) return []
  if (target < 0) return null

  for (let i = nums.length - 1; i >= 0; i--){
    let remainer = target - nums[i]
    let remainerResult = bestSum(nums, remainer)
    if (remainerResult !== null) return [...remainerResult, nums[i]]
  }

  return null
}

console.log(bestSum([2, 3, 4, 5], 8))

// add memo to reduce the time complexity
const bestSum1 = (nums, target, memo = {}) => {
  if (target === 0) return []
  if (target < 0) return null
  if (target in memo) return target[memo]

  for (let i = nums.length - 1; i >= 0; i--){
    let remainer = target - nums[i]
    let remainerResult = bestSum1(nums, remainer)
    if (remainerResult !== null) {
      memo[remainer] = remainerResult
      return [...remainerResult, nums[i]]
    }
  }

  return null
}

console.log(bestSum1([2, 3, 4, 5], 30))
