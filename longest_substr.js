// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

const longestSubstr = str => {
  let longest = ''
  for (let i = 0; i < str.length; i++){
    let substr = str[i]
    for (let j = i + 1; j < str.length; j++){
      if (str[i] !== str[j]){
        substr += str[j]
        if (substr.length > longest.length) longest = substr
      } else {
        i = j
        break
      }
    }
  }
  console.log(longest)
}

const str = "abcabcbb"
longestSubstr(str)

const fib = (num, memo = {}) => {
  if (num === 1) return 1
  if (num === 2) return 1
  if (num in memo) return memo[num]
  memo[num] = fib((num - 1), memo) + fib((num - 2), memo)
  return memo[num]
}

console.log(fib(100))

const gridTraveler = (long, short, memo = {}) => {
  const key = long.toString() + short.toString();

  if (key in memo) return memo[key];
  if (long === 1 || short === 1) return 1;
  if (long === 0 || short === 0) return 0;

  memo[key] = gridTraveler(long - 1, short, memo) + gridTraveler(long, short - 1, memo)
  return memo[key]
}

console.log(gridTraveler(18, 18))

const mostWater = arr => {
  let most = 0
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
      const long = j - i;
      const height = arr[i] > arr[j] ? arr[j] : arr[i]
      const area = long * height
      if (area > most) most = area
    }
  }
  console.log(most)
}

let height = [4,3,2,1,4]
mostWater(height)
height = [1,8,6,2,5,4,8,3,7]
mostWater(height)

const valid = {"(":")", "{":"}", "[":"]"}
const isValid = str => {
  for (let i = 0; i < str.length - 1; i++){
    if (valid[str[i]] === str[i + 1]){
      str.splice(i, 2)
    }
  }
  console.log(str)
}

const s = "()[]{}"
isValid(s)