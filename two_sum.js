// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// elements are reuseable
const twoSum = (nums, target) => {
  if (target === 0) return []
  if (target < 0) return null

  for(let num of nums) {
    const remainder = target - num;
    const remainderResult = twoSum(nums, remainder);
    if (remainderResult !== null){
      return [...remainderResult, num]
    }
  }

  return null
}

const nums = [3,2,4]
const target = 6
console.log(twoSum(nums, target))

// elements are not reuseable
const twoSum1 = (nums, target) => {
  if (target === 0) return []
  if (target < 0) return null

  for(let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    const remainElement = nums.filter(e => e !== nums[i])
    const remainderResult = twoSum1(remainElement, remainder);
    if (remainderResult !== null){
      return [...remainderResult, nums[i]]
    }
  }

  return null
}

console.log(twoSum1(nums, target))

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const add_two_nums = (num1, num2) => {
  const result = []

  const long = num1.length > num2.length ? num1 : num2;
  const short = num1.length > num2.length ? num2 : num1;

  const difference = long.length - short.length

  for (let i = 0; i < difference; i++) short.unshift(0)

  let andone = false

  for (let j = long.length - 1; j >= 0; j--){
    let plus = andone ? long[j] + short[j] + 1 : long[j] + short[j]
    andone = false;
    if (plus >= 10){
      result.push(plus - 10)
      andone = true
    } else {
      result.push(plus)
    }
    if (andone && j === 0) result.push(1)
  }

  console.log(result)

}

const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]
add_two_nums(l1, l2)
