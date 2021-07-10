// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const nums = [100,4,200,1,3,2]
nums.sort(function(a, b) {
  return a - b;
})

const longestConsecutiveSequence = nums => {
  const consecutiveSequences = []
  for (let i = 0; i < nums.length; i++){
    let consecutiveArr = [nums[i]]
    while(nums[i + 1] - nums[i] === 1){
      consecutiveArr.push(nums[i + 1])
      i += 1
    }
    consecutiveSequences.push(consecutiveArr)
  }
  const lengths = consecutiveSequences.map(a=>a.length);
  // lengths.indexOf(Math.max(...lengths));
  return Math.max(...lengths)
}

console.log(longestConsecutiveSequence(nums))