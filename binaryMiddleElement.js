const binarySearchIterative = function(arr, key){
  let length = arr.length;
  let low = 0;
  let high = length - 1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    let current = arr[mid];
    console.log('current', current, 'mid', mid, 'high', arr[high], 'low', arr[low])
    if(current == key) {
      return true;
    } else if(current < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 5]
const key = 2
console.log(binarySearchIterative(arr, key))