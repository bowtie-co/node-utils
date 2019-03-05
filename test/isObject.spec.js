/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { isObject } = require('../')

const inputs = {
  obj: {},
  arr: [],
  str: ''
}

describe('isObject', function () {
  it('should exist as a function', function () {
    expect(isObject).to.exist
    expect(isObject).to.be.a('function')
  })

  it('should verify an object', function () {
    expect(isObject(inputs.obj)).to.eq(true)
  })

  it('should return false if item is an array', function () {
    expect(isObject(inputs.arr)).to.eq(false)
  })

  it('should return false if nothing is passed in', function () {
    expect(isObject()).to.eq(false)
  })

  it('should return true for an object with key value pairs', function () {
    const fullObj = { 1: 1, 2: 2, 3: 3 }
    expect(isObject(fullObj)).to.eq(true)
  })

  it('should return false for an array with values', function () {
    const fullArr = [1, 2, 3]
    expect(isObject(fullArr)).to.eq(false)
  })
})

module.exports.inputs = inputs
