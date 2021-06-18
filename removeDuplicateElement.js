// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

nums = [0,0,1,1,1,2,2,3,3,4]
const removeDuplicateElement = function (arr) {
  const elements = [];
  const underscore = []
  for (const element of arr){
    if (elements.includes(element)){
      underscore.push('_')
    } else {
      elements.push(element)
    }
  }
  const result = elements.concat(underscore)
  return `output: ${elements.length}, nums = [${result}]`
}

console.log(removeDuplicateElement(nums))