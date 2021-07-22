// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const roman = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M' 
}

const nums = [1000, 5000, 100, 50, 10, 5, 1]

const intToRoman = num => {
  let result = ''
  nums.forEach(element => {
    let remainer = Math.floor(num / element)
    if (remainer >= 1) {
      num -= element * remainer
      if (remainer === 4) result += roman[element] + roman[element * 5]
      if (remainer === 9) result +=  roman[element] + roman[element * 10]
      if (remainer <= 3){
        for (let i = 0; i < remainer; i++) result += roman[element]
      }
      if (remainer >= 6 && remainer <= 8){
        result += roman[element * 5]
        for (let i = 0; i < remainer - 5; i++) result += roman[element]
      }
      console.log(element, remainer, result)
    }
  })
  console.log(result)
}

// intToRoman(1994)
// intToRoman(6)