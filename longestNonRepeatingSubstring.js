var lengthOfLongestSubstring = function (s) {

  let longest = [0, 0], current = [0, 0];
  let dict = {};

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      i = current[0] + 1;
      current = [0, 0];
      dict = {};
    } 
    dict[s[i]] = dict[s[i]] + 1 || 1;
    if (!current[1]) {
      current = [i, 1];
    } else {
      current[1]++;
    }
    if (current[1] > longest[1]) {
      longest = [current[0], current[1]];
    }
  }
  return longest[1];
};
console.log(lengthOfLongestSubstring('abb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('abcabcbb'));