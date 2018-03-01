/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { buildUrlParamObj } = require('../')

const inputs = {
  callbackUrl: 'www.example.com/something#key1=value1&key2=value2',
  validParamChar: '#',
  invalidParamChar: '*',
  expectedParamObj: {
    key1: 'value1',
    key2: 'value2'
  }
}

describe('buildUrlParamObj', function () {
  it('should exist as a function', function () {
    expect(buildUrlParamObj).to.exist
    expect(buildUrlParamObj).to.be.a('function')
  })

  it('should return an object with two key value pairs', function () {
    const result = buildUrlParamObj(inputs.callbackUrl, inputs.validParamChar)
    expect(result).to.be.a('object')
    expect(Object.keys(result)).to.have.lengthOf(2)
    expect(result).to.eql(inputs.expectedParamObj)
  })

  it('should throw an error message if paramChar is invalid', function () {
    const result = () => {
      buildUrlParamObj(inputs.callbackUrl, inputs.invalidParamChar)
    }

    expect(result).to.throw()
  })

  it('should not throw an error message if paramChar is valid', function () {
    const result = () => {
      buildUrlParamObj(inputs.callbackUrl, inputs.validParamChar)
    }

    expect(result).to.not.throw()
  })
})

module.exports.inputs = inputs
