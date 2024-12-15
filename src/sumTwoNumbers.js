/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let firstNum = Number(String(firstNumber).replace(/\s+/g, '').replace('--', '-')); //преобразовала в стрингу(и потом в число), убрала пробелы, и -- заменила на -
  let secondNum = Number(String(secondNumber).replace(/\s+/g, '').replace('--', '-'));
  let result = firstNum + secondNum;
  return result;
};
