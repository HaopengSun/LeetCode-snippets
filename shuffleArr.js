// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

class Solution {
  constructor(nums){
    this.nums = nums
  }
}

Solution.prototype.reset = function() {
  return this.nums
};

Solution.prototype.shuffle = function() {
  for (let i = this.nums.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.nums[i];
      this.nums[i] = this.nums[j];
      this.nums[j] = temp;
  }
  return this.nums
};

const solution = new Solution([1, 2, 3])
console.log(solution.reset())
console.log(solution.shuffle())