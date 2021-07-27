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

console.log(canSum(7, [5, 3, 4]))
