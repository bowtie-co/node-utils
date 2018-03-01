/**
 * Builds an object composed of all query params in a specified URL.
 * @example <caption>Builds a params object from a URL</caption>
 * var { buildUrlParamObj } = require('@bowtie/utils')
 *
 * var url = 'www.example.com/something?key1=value1&key2=value2'
 * var paramChar = "?"
 * var result = buildUrlParamObj(url, paramChar)
 * console.log(result)
 * // { key1: "value1", key2: "value2" }
 * @example <caption>Build a params object from a URL with a custom paramChar</caption>
 * var { buildUrlParamObj } = require('@bowtie/utils')
 *
 * var url = 'www.example.com/something#key1=value1&key2=value2'
 * var paramChar = '#'
 * console.log( buildUrlParamObj(url, paramChar) )
 * // { key1: "value1", key2: "value2" }
 * @param {string} url - Url containing params
 * @param {string} paramChar - The character that indicates the start of the query parameters
 * @returns {object} - Returns an object with the query params and their associated values.
 */

const buildUrlParamObj = (url, paramChar) => {
  if (!url.includes(paramChar)) {
    throw Error(`The ${paramChar} paramChar does not exist in the Url. Please choose a character that indicates the beginning of the param queries.`)
  }

  const query = url.substr(url.indexOf(paramChar) + 1)
  const queryParams = query.split('&')
  let paramsObj = {}

  queryParams.forEach(p => {
    const param = p.split('=')

    paramsObj[param[0]] = param[1]
  })

  return paramsObj
}

var callbackUrl = 'www.example.com/something#key1=value1&key2=value2'
var p = buildUrlParamObj(callbackUrl, '#')

console.log(p)

module.exports = buildUrlParamObj
