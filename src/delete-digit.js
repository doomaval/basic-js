const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let sa = str.split("");
    sa.splice(i, 1);
    arr.push(+sa.join(""));
  }
  return Math.max(...arr);
  // let arr = n.toString().split("");
  // let sarr = Array.from(arr).sort();
  // arr.splice(arr.indexOf(sarr[0]), 1);
  // return +arr.join("");
}

module.exports = {
  deleteDigit,
};
