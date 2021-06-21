// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

const result = []
const permutation = function(arr){
  for (let i = 0; i < arr.length; i++){
    let remain = arr.filter(e => e !== arr[i])
    permutate(remain, [arr[i]])
  }
}

const permutate = function(subArr, current){
  if (subArr.length === 0) result.push(current)
  for (let i = 0; i < subArr.length; i++){
    let remain = subArr.filter(e => e !== subArr[i])
    permutate(remain, [...current, subArr[i]])
  }
}

const nums = [1,2,3]
permutation(nums)
console.log(result)

function permutator(inputArr) {
  const results = [];

  function permute(arr, memo) {
    let cur, memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}