var search = function (nums, target) {
  let binarySearch = (arr, target, start, stop) => {
    let mid = Math.floor((stop + start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (stop - start <= 0) {
      return -1;
    } else if (arr[mid] <= arr[stop]) { // right side is normally ordered
      if (target > arr[mid] && target <= arr[stop]) {
        return binarySearch(arr, target, mid + 1, stop);
      } else {
        return binarySearch(arr, target, start, mid - 1);
      }
    } else { // left side is normally ordered
      if (target < arr[mid] && target >= arr[start]) {
        return binarySearch(arr, target, start, mid - 1);
      } else {
        return binarySearch(arr, target, mid + 1, stop);
      }
    }
  }
  return binarySearch(nums, target, 0, nums.length - 1)
};

console.log(search([1,3], 3));