/**
 * Extracts the value of a specified query param from a URL.
 * @example <caption>Extracts the value of a specified query param from a URL.</caption>
 * var { extractUrlParam } = require('@bowtie/utils')
 *
 * var url = 'www.example.com/something?key1=value1&key2=value2'
 *
 * console.log( extractUrlParam(url, 'key2') )
 * // logs 'value2'
 * @example <caption>Build a params object from a URL with a custom paramChar</caption>
 * var { extractUrlParam } = require('@bowtie/utils')
 *
  * var url = 'www.example.com/something?key1=value1&key2=value2'
 *
 * console.log( extractUrlParam(url, 'key1') )
 * // logs 'value1'
 * @param {string} url - Url containing params
 * @param {string} name - the name of the url param to extract.
 * @returns {string} - Returns the value of the query param.
 */

const extractUrlParam = (url, name) => {
  var regex = new RegExp(name + '=([^&]+)')

  var matches = url.match(regex)

  if (matches && matches.length > 1) {
    var value = matches[1]
    return value
  } else {
    throw Error(`cannot find ${name}`)
  }
}

module.exports = extractUrlParam
