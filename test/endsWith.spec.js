const expect = require('chai').expect;
const { endsWith } = require('../');

describe('endsWith', function() {
  it('should exist as a function', function() {
    expect(endsWith).to.exist;
    expect(endsWith).to.be.a('function');
  });

  it('should return true if string ending matches', function() {
    expect(endsWith('somestring', 'string')).to.be.true;
  });

  it('should return false if string ending does not match', function() {
    expect(endsWith('somestring', 'test')).to.be.false;
  });
});
