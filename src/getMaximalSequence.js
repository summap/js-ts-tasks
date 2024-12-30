/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let currentSequence = [arr[0]];
  let maxSequence = [];

  let i = 0;
  while (i <= arr.length) {
    if (arr[i] === arr[i - 1]) {
      currentSequence[currentSequence.length] = arr[i];
    } else {
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
    i++;
  }

  if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence;
  }
  return maxSequence;
};
