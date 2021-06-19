// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

const haystackNeedle = function(haystack, needle){
  for (let i = 0; i < haystack.length - needle.length; i++){
    if (haystack.slice(i, i + needle.length) === needle){
      return i
    }
  }
  return -1
}

const haystack = "hello"
const needle = "ll"
console.log(haystackNeedle(haystack, needle))