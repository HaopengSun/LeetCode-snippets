// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "  hello world  "
// Output: "world hello"

const reverseStr = str => {
  return str.trim().split(' ').reverse().join(' ')
}

const s = "the sky is blue"
console.log(reverseStr(s))
const s1 = "  hello world  "
console.log(reverseStr(s1))
