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

/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the string (default: 10)
 * @param {string} charset - The characters to use (default: alphanumeric)
 * @returns {string} A random string
 */
function getRandomString(length = 10, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  if (length < 0) {
    throw new Error('length must be non-negative');
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

module.exports = { getRandomNumber, getRandomString };
