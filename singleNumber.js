// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

const singleNumber = nums => {
  const recurrence = {}
  for (const num of nums){
    if (recurrence[num]){
      recurrence[num] += 1
    } else {
      recurrence[num] = 1
    }
  }
  for (const key in recurrence){
    if (recurrence[key] === 1) return key
  }
}

const nums = [4,1,2,1,2]
console.log(singleNumber(nums))