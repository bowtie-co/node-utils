const expect = require('chai').expect;
const { verifyKeys } = require('../');

describe('verifyKeys', function() {
  it('should exist as a function', function() {
    expect(verifyKeys).to.exist;
    expect(verifyKeys).to.be.a('function');
  });

  it('should not throw if all keys are present', function() {
    const opts = {
      k1: 'v1',
      k2: 'v2'
    };

    const keys = [
      'k1',
      'k2'
    ];

    expect(() => { verifyKeys(opts, keys) }).to.not.throw();
  });

  it('should throw if any keys are missing', function() {
    const opts = {
      k1: 'v1',
    };

    const keys = [
      'k1',
      'k2'
    ];

    expect(() => { verifyKeys(opts, keys) }).to.throw();
  });
});
