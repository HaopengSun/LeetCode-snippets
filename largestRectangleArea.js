// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Input: heights = [2,4]
// Output: 4

const largestRectangleArea = function(arr){
  let maxi = 0
  for (let i = 0; i < arr.length; i++){
    let height = arr[i] > arr[i + 1] ? arr[i + 1] : arr[i]
    if (height * 2 > maxi) maxi = height * 2
  }
  return maxi
}

const heights = [2,1,5,6,2,3]
console.log(largestRectangleArea(heights))