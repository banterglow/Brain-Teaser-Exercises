let eval = (exp) => {
  let sum = 0;
  let product = 1;
  let compiled = '';
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '+') {
      if (compiled.length) {
        product *= compiled;
        compiled = '';
      }
      sum += product;
      product = 1;
    } else if (exp[i] === '*') {
      product *= compiled;
      compiled = '';
    } else {
      compiled += exp[i];
    }
  }
  if (compiled.length) {
    product *= compiled;
    compiled = '';
  }
  sum += product;
  return sum;
}

eval("50*3+12*4*2*60");