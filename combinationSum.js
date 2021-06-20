// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

var combinationSum = function(candidates, target) {
  let sols = [];
  let sum_rec = (curr_trial, curr_sum, start_idx) => {
      for (let i = start_idx; i < candidates.length; i++) {
          const c = candidates[i];
          curr_sum += c;
          curr_trial.push(c);
          if (curr_sum < target) {
              sum_rec(curr_trial, curr_sum, i);
          } else if (curr_sum === target) {
              sols.push(JSON.parse(JSON.stringify(curr_trial)));
          }
          curr_sum -= c;
          curr_trial.pop();
      }
  }
  sum_rec([], 0, 0);
  return sols;
};

const candidates = [2,3,6,7]
const target = 7
console.log(combinationSum(candidates, target))