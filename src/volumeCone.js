/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let result = (1 / 3) * Math.PI * r ** 2 * h;
  let rounded_result = Number(result.toFixed(2));
  return rounded_result;
};
