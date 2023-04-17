const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for (let domain of domains) {
    let arr = domain.split(".");
    let dl = arr.length;
    for (let i = 0; i < dl; i++) {
      let str = "";
      for (let j = dl - 1; j >= i; j--) {
        str = str + "." + arr[j];
      }
      if (str in res) {
        res[str] += 1;
      } else {
        res[str] = 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats,
};
