// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const equalArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

let nums1 = [1,2,2,1]
let nums2 = [2,2]

// console.log(equalArr(nums1, nums2))

const subArr = arr => {
  const sub = []
  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <= arr.length; j++){
      sub.push(arr.slice(i, j))
    }
  }
  return sub
}

// console.log(subArr(nums1))

const interactionTwoArr = (arr1, arr2) => {
  const subArr1 = subArr(arr1)
  const subArr2 = subArr(arr2)
  const result = []
  subArr1.forEach(subarr1 => {
    subArr2.forEach(subarr2 => {
      // console.log(subarr1, subarr2)
      if (equalArr(subarr1, subarr2)) result.push(subarr2) 
    })
  })
  return result
}

console.log(interactionTwoArr(nums1, nums2))

nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
console.log(interactionTwoArr(nums1, nums2))