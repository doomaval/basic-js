const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes ??= 1;
  options.separator ??= "+";
  options.additionRepeatTimes ??= 1;
  options.additionSeparator ??= "|";

  let additionString = "";

  if ("addition" in options) {
    additionString = options.addition;
    for (let j = 1; j < options.additionRepeatTimes; j++) {
      additionString += options.additionSeparator + options.addition;
    }
  }

  let res = str + additionString;
  for (let i = 1; i < options.repeatTimes; i++) {
    res += options.separator + str + additionString;
  }
  return res;
}

module.exports = {
  repeater,
};
