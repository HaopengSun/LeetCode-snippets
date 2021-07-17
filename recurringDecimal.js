// Input: numerator = 2, denominator = 3
// Output: "0.(6)"

let numerator = 2
let denominator = 3

const recurring = nums => {
  nums.pop()
  // console.log(nums)
  const recurringNum = [nums[0]]
  for (let i = 1; i < nums.length; i ++){
    if (nums[0] !== nums[i]) recurringNum.push(nums[i])
    if (nums[0] === nums[i]){
      let whetherRecurring = true
      for(let j = 1; j < recurringNum.length; j++){
        if (recurringNum[j] !== nums[j + i]) whetherRecurring = false
      }
      if (whetherRecurring) return recurringNum
    }
  }
}

const recurringDecimal = (numerator, denominator) => {
  return '(' + recurring((numerator / denominator).toFixed(10).toString().split('.')[1].split('').map(str => Number(str))).join('') + ')'
}

console.log(recurringDecimal(numerator, denominator))

numerator = 4
denominator = 333
console.log(recurringDecimal(numerator, denominator))
