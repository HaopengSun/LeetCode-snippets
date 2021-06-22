// const a = 'abcd'
// const b = 'ab'
// console.log(a.includes(b)) output true

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const longestSubstr = function(str){
  const substr = []
  const recurrence = []
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j < str.length; j++){
      let sub = str.slice(i, j)
      if (substr.includes(sub)) recurrence.push(sub)
      substr.push(sub)
    }
  }
  return recurrence.sort((a, b) => b.length - a.length)[0];
}

const s = "abcabcbb"
console.log(longestSubstr(s))