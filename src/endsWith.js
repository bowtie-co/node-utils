const escapeStringRegexp = require('escape-string-regexp')

/**
 * Check if subject ends with search string(s)
 * @example <caption>Check for single string ending.</caption>
 * var { endsWith } = require('@bowtie/utils')
 *
 * var sub = 'hello world'
 *
 * endsWith(sub, 'world') // true
 * endsWith(sub, 'hello') // false
 * @example <caption>Check against list of string endings.</caption>
 * var { endsWith } = require('@bowtie/utils')
 *
 * var sub = 'hello world'
 *
 * endsWith(sub, [ 'planet', 'world' ]) // true
 * endsWith(sub, [ 'planet', 'earth' ]) // false
 * @param {string} subject - Subject to search against
 * @param {string|string[]} search - String or array of strings to check for ending
 * @returns {boolean} - Returns whether of not `subject` ends with `search`
 */
const endsWith = (subject, search) => {
  const hasEnding = (str) => {
    const regex = new RegExp(escapeStringRegexp(str) + '$')
    return regex.test(subject)
  }

  if (Array.isArray(search)) {
    return search.some(k => hasEnding(k))
  } else {
    return hasEnding(search)
  }
}

module.exports = endsWith
