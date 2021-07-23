const result = []
const canSum = (nums, target, memo = []) => {
  for (let i = 0; i < nums.length; i++){
    let newTarget = target - nums[i]
    if (newTarget == 0) {
      let str = [...memo, nums[i]].sort().join('')
      if (!result.includes(str)) result.push(str)
    } else if (newTarget > 0) {
      let remain = []
      nums.forEach(num => {
        if (num !== nums[i]) remain.push(num)
      })
      canSum(remain, newTarget, [...memo, nums[i]])
    }
  }
}

canSum([2, 3, 4, 7, 5], 7)
console.log(result)