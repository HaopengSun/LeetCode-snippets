// Input: s = "abcabcbb"
// Output: 3

// Input: s = "pwwkew"
// Output: 3

const longestSubstring = str => {
  let longest = 1
  for (let i = 0; i < str.length - 1; i++){
    let substr = [str[i]]
    for (let j = i + 1; j < str.length; j++){
      if (!substr.includes(str[j])) {
        substr.push(str[j])
      } else {
        break
      }
      if (substr.length > longest) longest = substr.length
    }
  }
  return longest
}

const str = "pwwkew"
console.log(longestSubstring(str))
