const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  maxd = 0;
  d = 0;
  calculateDepth(arr) {
    if (this.d === 0) this.maxd = 0;
    this.d++;
    if (this.d > this.maxd) this.maxd = this.d;
    for (let item of arr) {
      if (Array.isArray(item)) this.calculateDepth(item);
    }
    this.d--;
    if (this.maxd > this.d) {
      return this.maxd;
    } else return this.d;
  }
}

module.exports = {
  DepthCalculator,
};
