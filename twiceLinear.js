function dblLinear(n) {
  let arr = [1], i = 0, tracker = {};
  while (arr.length < n * Math.pow(n, 1/3)) {
    arr.push(2 * arr[i] + 1);
    arr.push(3 * arr[i] + 1);
    i++;
  }
  arr.forEach(num => { tracker[num] = num; })
  return parseInt(Object.values(tracker).sort((a, b) => a-b)[n]);
}

console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447);