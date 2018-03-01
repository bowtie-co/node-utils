/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { extractUrlParam } = require('../')

const inputs = {
  callbackUrl: 'www.example.com/something#key1=value1&key2=value2',
  validParams: {
    key1: 'value1',
    key2: 'value2'
  },
  invalidParams: {
    key3: 'value3'
  }
}

describe('extractUrlParam', function () {
  it('should exist as a function', function () {
    expect(extractUrlParam).to.exist
    expect(extractUrlParam).to.be.a('function')
  })

  it('should return a string that is the value of the specified param', function () {
    Object.keys(inputs.validParams).forEach(key => {
      const value = inputs.validParams[key]

      const result = extractUrlParam(inputs.callbackUrl, key)
      expect(result).to.eql(value)
    })
  })

  it('should throw an error message if paramChar is invalid', function () {
    Object.keys(inputs.invalidParams).forEach(key => {
      const result = () => {
        extractUrlParam(inputs.callbackUrl, key)
      }

      expect(result).to.throw()
    })
  })
})

module.exports.inputs = inputs
