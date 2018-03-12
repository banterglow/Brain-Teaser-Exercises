var canJump = function (nums) {
  let jumpRecurse = (arr, current, distance) => {
    if (arr[current] > distance) {
      distance = arr[current];
    }
    if (current + distance >= arr.length - 1) {
      return true;
    } else if (!distance) {
      return false;
    } else {
      return jumpRecurse(arr, ++current, --distance);
    }
  }
  return jumpRecurse(nums, 0, 0);
};