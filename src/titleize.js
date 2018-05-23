const capitalizeWord = require('./capitalizeWord')
/**
 * Capitalize sentence with default seperator.
 * @example <caption>Capitalize sentence with default seperator.</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var string = 'hello world'
 *
 * titleize(string) // 'Hello World'
 * @example <caption>Capitalize string with specified seperator</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var string = 'hello_world'
 *
 * titleize(string, '_') // Hello World
 * @example <caption>Only capitalize words that are not articles.</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var string = 'this is a title'
 *
 * titleize(string) // This Is a Title
 * @example <caption>Capitalize article if it is the first word</caption>
 * var { titleize } = require('@bowtie/utils')
 *
 * var string = 'a title this is'
 *
 * titleize(string) // A Title This Is
 * @param {string} subject - Subject to titleize
 * @param {string|string[]} sep - Seperator to split the string. Defaults to " ".
 * @returns {boolean} - Titleized string.
 */

const excludedWords = ['of', 'as', 'or', 'for', 'a', 'an']

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
