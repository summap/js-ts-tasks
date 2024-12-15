/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let result = 0;
  n = Math.abs(n); //преобразование n в положительно число
  if (n === 0) return 0;
  else
    while (n > 0) {
      let lastDigit = n % 10;
      result = result + lastDigit;
      n = Math.floor(n / 10);
    }
  return result;
};
