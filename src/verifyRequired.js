const verifyKeys = require('./verifyKeys')
const verifySchema = require('./verifySchema')

/**
 * Verify required options against keys or schema object
 * @example <caption>Verify options against schema.</caption>
 * var { verifyRequired } = require('@bowtie/utils')
 *
 * var options = {
 *   opt1: 'something',
 *   opt2: true,
 *   opt3: {
 *     str: 'a string',
 *     num: 12345
 *   }
 * }
 *
 * var schema = {
 *   opt1: 'string',
 *   opt2: 'boolean',
 *   opt3: {
 *     str: 'string',
 *     num: 'number'
 *   }
 * }
 *
 * verifyRequired(options, schema) // Does not throw Error
 *
 * options.opt2 = 'a string instead of a boolean'
 *
 * verifyRequired(options, schema) // Throws Error('Invalid type for key: opt2')
 * @example <caption>Verify options against keys array.</caption>
 * var { verifyRequired } = require('@bowtie/utils')
 *
 * var options = {
 *   opt1: 'something',
 *   opt2: true,
 *   opt3: {
 *     str: 'a string',
 *     num: 12345
 *   }
 * }
 *
 * verifyRequired(options, [ 'opt1', 'opt2', 'opt3' ]) // Does not throw Error
 * verifyRequired(options, [ 'opt1', 'opt2', 'opt4' ]) // Throws Error('Missing required key: opt4')
 * @param {object} options - Options to be checked for requirements
 * @param {object|string[]} required - Either an array of expected keys, or a schema object
 * @throws {Error} Invalid Argument
 */
const verifyRequired = (options, required) => {
  if (!options || typeof options !== 'object') {
    throw new Error('Invalid Argument')
  }

  if (Array.isArray(required)) {
    verifyKeys(options, required)
  } else if (typeof required === 'object') {
    verifySchema(options, required)
  } else {
    throw new Error('Invalid Argument')
  }
}

module.exports = verifyRequired
