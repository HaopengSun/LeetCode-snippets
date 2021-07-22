// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {
  let miniLength = strs[0].length
  strs.forEach(word => {
    if (word.length < miniLength) miniLength = word.length
  })
  console.log(miniLength)
  let result = ''
  for (let i = 0; i < miniLength; i++){
    let letter = strs[0][i]
    let equal = true
    strs.forEach(word => {
      if (word[i] !== letter) equal = false
    })
    if (equal) {
      result += letter
    } else {
      break
    }
  }
  console.log(result)
};

const strs = ["flower","flow","flight"]
longestCommonPrefix(strs)