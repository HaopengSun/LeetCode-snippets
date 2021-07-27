const canSum = (target, nums) => {
  if (target === 0) return true
  if (target < 0) return false
  for(let num of nums){
    let newTarget = target - num
    if (canSum(newTarget, nums) === true) return true
  }
  // if do not find the matches result, return false
  return false
}

// console.log(canSum(7, [5, 3, 4]))

const canSum1 = (target, nums) => {
  const grid = []
  for(let i = 0; i < nums.length - 1; i++){
    grid.push(nums[i])
    grid.push(nums[i] * 2)
    for(let j = i + 1; j < nums.length; j++){
      let sum = nums[i] + nums[j]
      grid.push(sum)
    }
  }

  const found = (target, grid) => {
    for (let element of grid){
      if (target === element) return true
    }
    for (let element of grid){
      if (target > element) {
        if (found((target - element), grid)) return true
      }
    }
    return false
  }

  return found(target, grid)
}

// console.log(canSum1(7, [5, 3, 4, 2, 5]))

// build an array of (target + 1) elements and initialize them with false
// true false false false false false false false // 0 = true
// true false true false false false false false // 0 + 2 = true
const canSum2 = (target, nums) => {
  const arr = Array(target + 1).fill(false)
  arr[0] = true
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === true) {
      for (let num of nums) {
        if (num + i < arr.length) arr[num + i] = true
      }
    }
  }
  return arr[arr.length - 1]
}

console.log(canSum2(7, [5, 3, 4, 2]))
