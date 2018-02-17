/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { endsWith } = require('../')

const inputs = {
  subject: 'somestring',
  subjectValidEnding: 'string',
  subjectInvalidEnding: 'wrong',
  subjectAllValidEndings: [
    'g',
    'in',
    'ring',
    'tring',
    'string'
  ],
  subjectSomeValidEndings: [
    'string',
    'ring',
    'test',
    'foobar'
  ],
  subjectInvalidEndings: [
    'w',
    'wr',
    'wro',
    'wron',
    'wrong'
  ]
}

describe('endsWith', function () {
  it('should exist as a function', function () {
    expect(endsWith).to.exist
    expect(endsWith).to.be.a('function')
  })

  it('should return true if string ending matches', function () {
    expect(endsWith(inputs.subject, inputs.subjectValidEnding)).to.be.true
  })

  it('should return false if string ending does not match', function () {
    expect(endsWith(inputs.subject, inputs.subjectInvalidEnding)).to.be.false
  })

  it('should return true if all string endings in array match', function () {
    expect(endsWith(inputs.subject, inputs.subjectAllValidEndings)).to.be.true
  })

  it('should return true if some string endings in array match', function () {
    expect(endsWith(inputs.subject, inputs.subjectSomeValidEndings)).to.be.true
  })

  it('should return false if no string endings in array match', function () {
    expect(endsWith(inputs.subject, inputs.subjectInvalidEndings)).to.be.false
  })
})

module.exports.inputs = inputs
