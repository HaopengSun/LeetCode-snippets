// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Input: height = [4,2,0,3,2,5]
// Output: 9

const rainWater = function(arr){
  let result = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== 0){
      for (let j = i + 1; j < arr.length; j++){
        if (arr[i] <= arr[j]){
          let sumInBetween = arr.slice(i, j - 1).reduce((accumulator, currentValue) => accumulator + currentValue)
          result += sumInBetween
          i = j
        }
      }
    }
  }
  return result
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(rainWater(height))

const height1 = [4,2,0,3,2,5]
console.log(rainWater(height1))