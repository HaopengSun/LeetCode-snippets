// Input: s = "IV"
// Output: 4

// Input: s = "IX"
// Output: 9

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const roman = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000 
}

const romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

const romansPosition = letter => {
  let i = 0
  let result = 0
  romans.forEach(l => {
    console.log(l, letter, i)
    if (l === letter) result = i
    i++
  })
  return result
}

const romanToNum = str => {
  let j = 0
  let result = 0
  for(let j = 0; j < str.length; j++){
    let i = romansPosition(str[j])
    if (str[j + 1] === romans[i - 1]) {
      result += roman[romans[i]] * 4
      j += 1
    } else if (str[j + 1] === romans[i - 2]) {
      result += roman[romans[i]] * 9
      j += 1
    } else {
      result += roman[romans[i]]
    }
  }
  console.log(result)
}


const s1 = "IV"
const s2 = "IX"
const s3 = "LVIII"
const s4 = "MCMXCIV"
romanToNum(s1)
romanToNum(s2)
romanToNum(s3)
romanToNum(s4)