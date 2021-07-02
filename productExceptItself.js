// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const product = (accumulator, currentValue) => accumulator * currentValue;
const productExceptItself = nums => {
  const result = []
  for (const num of nums){
    const arrWithoutItself = nums.filter(number => number != num);
    result.push(arrWithoutItself.reduce(product))
  }
  return result
}
const nums = [1,2,3,4]
console.log(productExceptItself(nums))