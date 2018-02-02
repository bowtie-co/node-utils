const expect = require('chai').expect;
const { verifyRequired } = require('../');

describe('verifyRequired', function() {
  it('should exist as a function', function() {
    expect(verifyRequired).to.exist;
    expect(verifyRequired).to.be.a('function');
  });

  it('should not throw when required options are present', function() {
    const opts = {
      k1: 'v1',
      k2: 'v2'
    };

    const keys = [
      'k1',
      'k2'
    ];

    expect(() => { verifyRequired(opts, keys) }).to.not.throw();
  });

  it('should throw when required options are missing', function() {
    const opts = {
      k1: 'v1'
    };

    const keys = [
      'k1',
      'k2'
    ];

    expect(() => { verifyRequired(opts, keys) }).to.throw();
  });
});
