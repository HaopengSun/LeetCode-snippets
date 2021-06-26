// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

const mergeIntervals = function(matrix) {
  for (let i = 0; i < matrix.length; i++){
    if (i + 1 < matrix.length && matrix[i][1] >= matrix[i + 1][0]) {
      matrix.insert(i + 2, [matrix[i][0], matrix[i + 1][1]])
      matrix.splice(i, 2);
    }
  }
  return matrix;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(mergeIntervals(intervals));

// The elements to add to the array, beginning from start.
// If you do not specify any elements, splice() will only remove elements from the array.