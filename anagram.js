// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const sortStr = (str) => str.split('').sort().join('')

const anagram = (strs) => {
  const anagramSorted = []
  const result = {}
  strs.forEach((str) => {
    if (!anagramSorted.includes(sortStr(str))) anagramSorted.push(sortStr(str)) 
  })
  anagramSorted.forEach((key) => result[key] = [])
  strs.forEach((str) => {
    if (anagramSorted.includes(sortStr(str))) result[sortStr(str)].push(str)
  })
  const results = []
  for(const key in result){
    results.push(result[key])
  }
  return results
}

const strs = ["eat","tea","tan","ate","nat","bat"]
anagram(strs)