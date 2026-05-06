/**
 * Generates a random number between min and max (inclusive).
 * @param {number} min - The minimum value (default: 0)
 * @param {number} max - The maximum value (default: 100)
 * @returns {number} A random number between min and max
 */
function getRandomNumber(min = 0, max = 100) {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { getRandomNumber };
