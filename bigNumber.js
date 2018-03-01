const bigNumber = require('bignumber.js');
function add(a, b) {
  let first = new bigNumber(a);
  let second = new bigNumber(b);
  let result = first.plus(second);
  return result.toFixed();
}

console.log(add('2341233212312341234', '123412341212312312312312334134'))