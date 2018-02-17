/**
 * Capitalize a string
 * @example <caption>Capitalize a lower case string.</caption>
 * var { capitalizeWord } = require('@bowtie/utils')
 *
 * var word = capitalizeWord('hello') // word = "Hello"
 * @example <caption>Capitalize a mixed case string.</caption>
 * var { capitalizeWord } = require('@bowtie/utils')
 *
 * var word = capitalizeWord('HeLLo') // word = "Hello"
 * @param {string} str - Input string to be capitalized
 * @returns {string} - Returns capitalized string
 */
const capitalizeWord = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

module.exports = capitalizeWord
