/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let diffElem = new Set();
  for (let i = 0; i < arr.length; i++) {
    diffElem.add(arr[i]);
  }
  return diffElem.size;
};
