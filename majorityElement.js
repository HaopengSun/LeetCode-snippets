// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = nums => {
  const appearance = {}
  nums.forEach(num => {
    if (appearance[num]){
      appearance[num] += 1
    } else {
      appearance[num] = 1
    }
  })
  for (const key in appearance){
    if (Number(key) > 1 && Number(key) / 2 < appearance[key]) return key
  }
}

const nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))