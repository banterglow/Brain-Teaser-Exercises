let quickSort = (arr, start, end) => {
  if (start >= end) {
    return arr;
  }
  let lesser = greater = start;
  while (greater < end) {
    if (arr[greater] >= arr[end]) {
      greater++;
    } else if (arr[greater] < arr[end]) {
      swap(arr, lesser, greater);
      greater++;
      lesser++;
    }
  }
  if (arr[lesser] > arr[end]) {
    swap(arr, lesser, end);
  }
  quickSort(arr, start, lesser - 1);
  quickSort(arr, lesser + 1, end);
  return arr;
}

let swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

// console.log(quickSort([5,3,7,2,9,10,6], 0, 6));
let testArr = [5, 54, 345, 562, 34, 3425, 43, 2, 34525, 3, 235, 14, 245, 534, 34, 65, 2534, 34];
console.log(quickSort(testArr, 0, testArr.length - 1));