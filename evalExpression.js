let eval = (exp) => {
  let sum = 0, product = 1, compiled = '';
  for (let i = 0; i <= exp.length; i++) {
    if (exp[i] === '+' || i === exp.length) {
      product *= compiled;
      sum += product;
      compiled = '';
      product = 1;
    } else if (exp[i] === '*') {
      product *= compiled;
      compiled = '';
    } else {
      compiled += exp[i];
    }
  }
  return sum;
}

eval("50+3+12*4+2*60");