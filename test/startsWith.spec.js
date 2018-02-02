const expect = require('chai').expect;
const { startsWith } = require('../');

describe('startsWith', function() {
  it('should exist as a function', function() {
    expect(startsWith).to.exist;
    expect(startsWith).to.be.a('function');
  });

  it('should return true if string beginning matches', function() {
    expect(startsWith('somestring', 'some')).to.be.true;
  });

  it('should return false if string beginning does not match', function() {
    expect(startsWith('somestring', 'test')).to.be.false;    
  });
});
