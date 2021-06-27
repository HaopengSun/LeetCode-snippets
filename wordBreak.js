// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true

const wordBreak = (str, wordDict) => {
  const arr = str.split('')
  let current = ''
  for (let i = 0; i < arr.length; i++){
    current += arr[i]
    if (wordDict.includes(current)) {
      arr.splice(0, i + 1)
      // reset the array
      current = ''
      i = -1
    }
  }
  return arr.length === 0
}

const s = "leetcode"
const wordDict = ["leet","code"]
console.log(wordBreak(s, wordDict))

const s1 = "applepenapple"
const wordDict1 = ["apple","pen"]
console.log(wordBreak(s1, wordDict1))

const s2 = "catsandog"
const wordDict2 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s2, wordDict2))