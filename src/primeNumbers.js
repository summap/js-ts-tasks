/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  for (let i = 2; i <= highestNumber; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return function (from, to) {
    const result = [];
    for (let i = 0; i < primes.length; i++) {
      if (primes[i] >= from && primes[i] <= to) {
        result.push(primes[i]);
      }
    }
    return result;
  };
};
