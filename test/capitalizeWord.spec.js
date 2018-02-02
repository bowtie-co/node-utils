const expect = require('chai').expect;
const { capitalizeWord } = require('../');

describe('capitalizeWord', function() {
  it('should exist as a function', function() {
    expect(capitalizeWord).to.exist;
    expect(capitalizeWord).to.be.a('function');
  });

  it('should capitalize the first letter', function() {
    expect(capitalizeWord('word')).to.eq('Word');
  });

  it('should return the same string if input is already capitalized', function() {
    expect(capitalizeWord('Word')).to.eq('Word');
  });
});