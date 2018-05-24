const capitalizeWord = require('./capitalizeWord')
const excludedWords = ['of', 'as', 'or', 'for', 'a', 'an']

/**
 * Capitalize sentence with default seperator.
 * @example <caption>Capitalize sentence with default seperator.</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var str = 'hello world'
 *
 * titleize(str) // 'Hello World'
 * @example <caption>Capitalize string with specified seperator</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var str = 'hello_world'
 *
 * titleize(str, '_') // Hello World

 * @example <caption>Capitalize string with specified join character</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var str = 'hello_world'
 *
 * titleize(str, '_', ', ') // Hello, World
 * @example <caption>Only capitalize words that are not articles.</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var str = 'this is a title'
 *
 * titleize(str) // This Is a Title
 * @example <caption>Capitalize article if it is the first word</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var str = 'a title this is'
 *
 * titleize(str) // A Title This Is
 *
 *
 * @param {string} subject - Subject to titleize
 * @param {string} sep - Seperator to split the string. Defaults to " ".
 * @param {string} join - Specificed character to join the string. Defaults to " ".
 * @returns {string} - Titleized string.
 */

const titleize = (subject, sep = ' ', join = ' ') => {
  return (
   subject.split(sep)
        .map((word, i) => {
          if (!excludedWords.includes(word) || i === 0) {
            return capitalizeWord(word)
          } else {
            return word
          }
        })
        .join(join)
  )
}

module.exports = titleize
