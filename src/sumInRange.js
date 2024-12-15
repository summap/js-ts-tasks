/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  let result = 0;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let i = start;
  {
    while (i <= end) {
      result = result + i;
      i = i + 1;
    }
  }

  return result;
};
