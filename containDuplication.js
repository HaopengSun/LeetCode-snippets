// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containDuplication = nums => {
  const duplication = {}
  // let result = false
  // nums.forEach(element => {
  //   if (!duplication[element]) {
  //     duplication[element] = 1
  //   } else {
  //     result = true
  //   }
  // });
  // return result

  for (const num of nums){
    if (!duplication[num]) {
      duplication[num] = 1
    } else {
      return true
    }
  }
  return false
}

const nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containDuplication(nums))