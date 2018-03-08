// A child is running up a staircase with n steps and can hop either 1, 2, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

let tripleStep = (steps, memo) => {
  return memoizeCombinations(steps, 3, new Map());
}

let memoizeCombinations = (stepsRemaining, maxSteps, memo) => {
  if (!stepsRemaining) {
    return 1;
  } else if (stepsRemaining < 0) {
    return 0;
  } else if (memo.get(stepsRemaining)) {
    return memo.get(stepsRemaining);
  } else {
    let sum = 0;
    for (let i = 1; i <= maxSteps; i++) {
      memo.set(stepsRemaining, memoizeCombinations(stepsRemaining - i, maxSteps, memo));
    }
    return memo.get(stepsRemaining);
  }
}

console.log(tripleStep(10));

