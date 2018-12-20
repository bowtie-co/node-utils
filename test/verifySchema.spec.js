/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { verifySchema } = require('../')

const inputs = {
  requiredSchema: {
    something: 'string',
    object: {
      key: 'string',
      enabled: 'boolean'
    }
  },
  validObject: {
    something: 'hello world',
    object: {
      key: 'value',
      enabled: true
    }
  },
  invalidObject: {
    something: 'hello world',
    object: {
      something: 'test',
      else: [
        'a', 'b', 'c'
      ]
    }
  }
}

describe('verifySchema', function () {
  it('should exist as a function', function () {
    expect(verifySchema).to.exist
    expect(verifySchema).to.be.a('function')
  })

  it('should not throw with a valid schema', function () {
    const verify = () => {
      verifySchema(inputs.validObject, inputs.requiredSchema)
    }

    expect(verify).to.not.throw()
  })

  it('should throw with an invalid schema', function () {
    const verify = () => {
      verifySchema(inputs.invalidObject, inputs.requiredSchema)
    }

    expect(verify).to.throw()
  })
})

module.exports.inputs = inputs
