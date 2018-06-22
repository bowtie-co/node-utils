/**
 * In Javascript, this is a two part check because an Array is technically an Object. isObject() is a shortcut to verify that a data type is an Object Literal.
 * @example <caption>Verify object contains keys.</caption>
 * var { isObject } = require('@bowtie/utils')
 *
 * var obj = { a: '1', b: '2', c: '3' }
 * var arr = [1, 2, 3]
 *
 * isObject(obj) // returns true
 * isObject(arr) // returns false
 * @param {object, array, string, integer} item - data type to verify
 */
const isObject = (item) => {
  if (item && item instanceof Object && !Array.isArray(item)) {
    return true
  } else {
    return false
  }
}

module.exports = isObject
