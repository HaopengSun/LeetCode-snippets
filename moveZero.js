// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZero = nums => {
  let amountZero = 0
  nums.forEach(num => {
    if (num === 0) amountZero += 1;
  })

  // const noneZero = nums.filter(num => num !== 0)
  // for (let i = 0; i < amountZero; i++) noneZero.push(0)
  // console.log(noneZero)
  
  for (let j = 0; j < nums.length; j++){
    if (nums[j] === 0) {
      nums.splice(j, 1)
      j--
    }
  }
  for (let i = 0; i < amountZero; i++) nums.push(0)
  console.log(nums)
}

const nums = [0,1,0,3,12]
moveZero(nums)