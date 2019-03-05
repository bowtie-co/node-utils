/**
 * In Javascript, this is a two part check because an Array is technically an Object. isObject() is a shortcut to verify that a data type is an Object Literal.
 * @example <caption>Verify object exists and is not an array</caption>
 * var { isObject } = require('@bowtie/utils')
 *
 * var obj = { a: '1', b: '2', c: '3' }
 * var arr = [1, 2, 3]
 *
 * isObject(obj) // returns true
 * isObject(arr) // returns false
 * @param {*} item - data type to verify
 */
const isObject = (item = false) => item instanceof Object && !Array.isArray(item)

module.exports = isObject
