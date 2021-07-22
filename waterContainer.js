// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

const waterContainer = height => {
  let maxi = 0
  for (let i = 0; i < height.length - 1; i++){
    let elementMaxi = 0
    for (let j = i + 1; j < height.length; j++){
      let inidividualHeight = height[j] >= height[i] ? height[i] : height[j]
      if (inidividualHeight * (j - i) > elementMaxi) elementMaxi = inidividualHeight * (j - i)
    }
    if (elementMaxi > maxi) maxi = elementMaxi
  }
  return maxi
}

// const height = [1,8,6,2,5,4,8,3,7]
const height = [4,3,2,1,4]
console.log(waterContainer(height))