/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { startsWith } = require('../')

const inputs = {
  subject: '.somestring',
  subjectValidBeginning: '.some',
  subjectInvalidBeginning: '-wrong',
  subjectAllValidBeginnings: [
    '.s',
    '.so',
    '.som',
    '.some'
  ],
  subjectSomeValidBeginnings: [
    '.some',
    '.so',
    '*test',
    '*foobar'
  ],
  subjectInvalidBeginnings: [
    '?w',
    '_wr',
    '-wro',
    '*wron',
    '&wrong'
  ]
}

describe('startsWith', function () {
  it('should exist as a function', function () {
    expect(startsWith).to.exist
    expect(startsWith).to.be.a('function')
  })

  it('should return true if string beginning matches', function () {
    expect(startsWith(inputs.subject, inputs.subjectValidBeginning)).to.be.true
  })

  it('should return false if string beginning does not match', function () {
    expect(startsWith(inputs.subject, inputs.subjectInvalidBeginning)).to.be.false
  })

  it('should return true if all string beginnings in array match', function () {
    expect(startsWith(inputs.subject, inputs.subjectAllValidBeginnings)).to.be.true
  })

  it('should return true if some string beginnings in array match', function () {
    expect(startsWith(inputs.subject, inputs.subjectSomeValidBeginnings)).to.be.true
  })

  it('should return false if no string beginnings in array match', function () {
    expect(startsWith(inputs.subject, inputs.subjectInvalidBeginnings)).to.be.false
  })
})

module.exports.inputs = inputs
