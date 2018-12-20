/**
 * Verify that an object contains required keys
 * @example <caption>Verify object contains keys.</caption>
 * var { verifyKeys } = require('@bowtie/utils')
 *
 * var obj = { a: '1', b: '2', c: '3' }
 *
 * verifyKeys(obj, [ 'a', 'b' ]) // Does not throw Error
 * verifyKeys(obj, [ 'c', 'd' ]) // Throws Error('Missing required key: d')
 * @param {object} obj - Object to verify keys against
 * @param {string[]} keys - Array of strings to verify existence of on `obj`
 * @throws {Error} Missing required key
 */
const verifyKeys = (obj, keys) => {
  keys.forEach(key => {
    if (typeof obj[key] === 'undefined') {
      throw Error(`Missing required key: ${key}`)
    }
  })
}

module.exports = verifyKeys
