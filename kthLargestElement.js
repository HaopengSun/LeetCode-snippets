// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

const sortedArr = arr => {
  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

const nums = [3,2,1,5,6,4]
const k = 2

console.log(sortedArr(nums))

const kthLargestElement = (arr, k) => {
  const result = sortedArr(arr)
  return result[result.length - k - 1]
}

console.log(kthLargestElement(nums, k))