// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) => {
  const arrS = s.split('')
  for (const letter of t){
    for (let i = 0; i < arrS.length; i++){
      if (arrS[i] === letter) arrS.splice(i, 1)
    }
  }
  return !arrS.length
}

const s = "anagram"
const t = "nagaram"
console.log(validAnagram(s, t))