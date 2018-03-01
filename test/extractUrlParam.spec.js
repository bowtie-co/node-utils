/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { extractUrlParam } = require('../')

const inputs = {
  callbackUrl: 'www.example.com/something#key1=value1&key2=value2',
  paramOne: { key1: 'value1' },
  paramTwo: { key2: 'value2' },
  invalidParam: { key3: 'value3' }
}

describe('extractUrlParam', function () {
  it('should exist as a function', function () {
    expect(extractUrlParam).to.exist
    expect(extractUrlParam).to.be.a('function')
  })

  it('should return a string that is the value of the specified param', function () {
    const result = extractUrlParam(inputs.callbackUrl, 'key1')
    expect(result).to.be.a('string')
    expect(result).to.deep.equal(inputs.paramOne.key1)
  })

  it('should throw an error message if paramChar is invalid', function () {
    const result = () => {
      extractUrlParam(inputs.callbackUrl, 'key3')
    }

    expect(result).to.throw()
  })
})

module.exports.inputs = inputs
