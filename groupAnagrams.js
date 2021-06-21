// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = function(arr){
  const obj = {};
  const sortedWord = []
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].split('').sort().join('')
    if (!sortedWord.includes(sorted)) {
      sortedWord.push(sorted)
      obj[sorted] = []
    }
  }

  for(const word of arr){
    for (const key in obj){
      let OK = true
      for (const letter of word){
        if (!key.includes(letter)) OK = false
      }
      if (OK) obj[key].push(word)
    }
  }
  
  const result = []
  for (const key in obj){
    result.push(obj[key])
  }
  console.log(result)
}

const strs = ["eat","tea","tan","ate","nat","bat"]
groupAnagrams(strs)