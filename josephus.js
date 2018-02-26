function josephus(items, k) {
  let current = 0; result = [];
  while(items.length > 0) {
    current = (current + k - 1) % items.length;
    result.push(items.splice(current, 1)[0]);
  }
  return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7],3));