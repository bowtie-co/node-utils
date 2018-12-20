const escapeStringRegexp = require('escape-string-regexp')

/**
 * Check if subject starts with search string(s)
 * @example <caption>Check for single string beginning.</caption>
 * var { startsWith } = require('@bowtie/utils')
 *
 * var sub = 'hello world'
 *
 * startsWith(sub, 'world') // false
 * startsWith(sub, 'hello') // true
 * @example <caption>Check against list of string beginning.</caption>
 * var { startsWith } = require('@bowtie/utils')
 *
 * var sub = 'hello world'
 *
 * startsWith(sub, [ 'hello', 'hola' ]) // true
 * startsWith(sub, [ 'hola', 'hi' ]) // false
 * @param {string} subject - Subject to search against
 * @param {string|string[]} search - String or array of strings to check for beginning
 * @returns {boolean} - Returns whether of not `subject` starts with `search`
 */
const startsWith = (subject, search) => {
  const hasBeginning = (str) => {
    const regex = new RegExp('^' + escapeStringRegexp(str))
    return regex.test(subject)
  }

  if (Array.isArray(search)) {
    return search.some(k => hasBeginning(k))
  } else {
    return hasBeginning(search)
  }
}

module.exports = startsWith
