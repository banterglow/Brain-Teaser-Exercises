var longestPalindrome = function (s) {
  let current = 0;
  let longest = [0, 1];
  // go through with using single digits as center pivot
  for (let i = 0; i < s.length; i++) {
    while (i - current >= 0 && i + current < s.length && s[i - current] === s[i + current]) {
      current++;
    }
    longest = current * 2 - 1 > longest[1] ? [i - current + 1, current * 2 - 1] : longest;
    current = 0;
  }
  // using duplicate runs as center
  for (let a = 0; a < s.length; a++) {
    if (s[a] === s[a + 1]) {
      while (a - current >= 0 && a + current < s.length && s[a - current] === s[a + current + 1]) {
        current++;
      }
      longest = current * 2 > longest[1] ? [a - current + 1, current * 2] : longest;
      current = 0;
    }
  }
  return s.slice(longest[0], longest[0] + longest[1]);
};