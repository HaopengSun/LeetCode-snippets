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