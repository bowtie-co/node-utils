/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { titleize } = require('../')

const inputs = {
  withSpace: 'hello world',
  withUnderscore: 'hello_world',
  withSpaceResponse: 'Hello World',
  withArticle: 'this is a title',
  withArticleResponse: 'This Is a Title',
  beginWithArticle: 'a blue house',
  beginWithArticleResponse: 'A Blue House',
  withJoin: 'some_string_here',
  withJoinResponse: 'Some, String, Here'
}

describe('titleize', function () {
  it('should exist as a function', function () {
    expect(titleize).to.exist
    expect(titleize).to.be.a('function')
  })

  it('should titleize the subject without passing in seperator', function () {
    expect(titleize(inputs.withSpace)).to.eq(inputs.withSpaceResponse)
  })

  it('should capitalize the first letter and change the rest to lower case', function () {
    expect(titleize(inputs.withUnderscore, '_')).to.eq(inputs.withSpaceResponse)
  })

  it('should return the same string if input is already capitalized', function () {
    expect(titleize(inputs.withArticle)).to.eq(inputs.withArticleResponse)
  })

  it('should return the same string if input is already capitalized', function () {
    expect(titleize(inputs.beginWithArticle)).to.eq(inputs.beginWithArticleResponse)
  })

  it('should return the same string if input is already capitalized', function () {
    expect(titleize(inputs.withJoin, '_', ', ')).to.eq(inputs.withJoinResponse)
  })
})

module.exports.inputs = inputs
