// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

// brute force
// l1 = [2,4,3]
// l2 = [5,6,4]

// const addTwoNumbers = function(arr1, arr2){
//   num1 = arrToNum(arr1)
//   num2 = arrToNum(arr2)
//   totalNum = num1 + num2
//   return numToArr(totalNum)
// }

// const arrToNum = function (arr){
//   let power = arr.length - 1
//   let num = 0
//   for (const element of arr){
//     num += element * Math.pow(10, power)
//     power -= 1
//   }
//   return num
// }

// const numToArr = function(num){
//   const strNum = num.toString().split('')
//   const result = strNum.map(element => parseInt(element))
//   return result
// }

// console.log(addTwoNumbers(l1, l2))


// l1 = [2,4,3]
// l2 = [5,6,4]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]

const equalLengthArr = function(arr1, arr2){
  const length1 = arr1.length
  const length2 = arr2.length
  const longest = length1 >= length2 ? length1 : length2
  if (longest > length2){
    const difference = longest - length2
    for (let i = difference; i > 0; i--){
      arr2.push(0)
    }
  }
  return addTwoNumbers(arr1, arr2)
}

const addTwoNumbers = function(arr1, arr2){
  let moreThanTen = false
  const result = []
  for (let i = 0; i < arr1.length; i++){
    let total = 0
    if (moreThanTen) {
      total += 1
      moreThanTen = false
    }

    total += (arr1[i] + arr2[i])
    if ( total >= 10 ){
      moreThanTen = true
      total -= 10
    }

    result.push(total)
    if (i === arr1.length - 1 && moreThanTen) result.push(1)
  }
  return result
}

console.log(equalLengthArr(l1, l2))