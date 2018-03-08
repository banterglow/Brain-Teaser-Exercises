let mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)));
}

let merge = (arr1, arr2) => {
  let newArr = [];
  let pos1 = 0, pos2 = 0;
  while (pos1 < arr1.length || pos2 < arr2.length) {
    if (pos1 === arr1.length) {
      newArr = newArr.concat(arr2.slice(pos2, arr2.length));
      break;
    } else if (pos2 === arr2.length) {
      newArr = newArr.concat(arr1.slice(pos1, arr1.length));
      break;
    } else if (arr1[pos1] <= arr2[pos2]) {
      newArr.push(arr1[pos1++]);
    } else {
      newArr.push(arr2[pos2++]);
    }
  }
  return newArr;
}

console.log(mergeSort([5, 3, 7, 2, 9, 10, 6]));
let testArr = [5, 54, 345, -6, 562, 34, 3425, 43, 2, 34525, 3, 235, 14, 245, 534, 34, 65, 2534, 34];
console.log(mergeSort(testArr));