const verifyKeys = require('./verifyKeys')

/**
 * Verify object schema against object schema definition
 * @example <caption>Verify options against schema.</caption>
 * var { verifySchema } = require('@bowtie/utils')
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
 * verifySchema(options, schema) // Does not throw Error
 *
 * options.opt2 = 'a string instead of a boolean'
 *
 * verifySchema(options, schema) // Throws Error('Invalid type for key: opt2')
 * @param {object} obj - Object to be checked for valid schema
 * @param {object|string[]} schema - Schema to be verified
 * @throws {Error} Invalid/missing object requiring schema
 * @throws {Error} Invalid type for key
 */
const verifySchema = (obj, schema) => {
  const keys = Object.keys(schema)

  if (!obj) {
    throw new Error('Invalid/missing object requiring schema: ' + JSON.stringify(schema))
  }

  verifyKeys(obj, keys)

  keys.forEach(key => {
    const type = schema[key]
    const value = obj[key]

    if (Array.isArray(type)) {
      verifyKeys(value, type)
    } else if (typeof type === 'object') {
      verifySchema(value, type)
    } else if (typeof value !== type) { // eslint-disable-line valid-typeof
      throw new Error(`Invalid type for key: ${key}`)
    }
  })
}

module.exports = verifySchema
