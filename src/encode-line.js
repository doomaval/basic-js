const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == "") return "";

  let res = "";
  let count = 1;
  let prevChar = str[0];
  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (char === prevChar) {
      count++;
      continue;
    } else {
      // if (count === 1) res = res + prevChar;
      // else res = res + count + prevChar;
      res = res + (count === 1 ? "" : count) + prevChar;
      prevChar = char;
      count = 1;
    }
  }
  res = res + (count === 1 ? "" : count) + prevChar;
  return res;
}

module.exports = {
  encodeLine,
};
