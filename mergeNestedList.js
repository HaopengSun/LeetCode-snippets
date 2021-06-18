// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

// flat function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
const lists = [[1,4,5],[1,3,4],[2,6]]
const mergeNestedList = function(arr){
  return arr.flat().sort();
}
console.log(mergeNestedList(lists));

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = flatten;

// console.log(flatten(lists));
