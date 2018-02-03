const expect = require('chai').expect;
const { verifyKeys } = require('../src');

const inputs = {
  requiredKeys:[
    'key1',
    'key2'
  ],
  validKeys: {
    key1: 'value',
    key2: true
  },
  missingAllKeys: {},
  missingSomeKeys: {
    key1: 'value'
  },
  invalidKeys: {
    key3: 'something'
  }
};

describe('verifyKeys', function() {
  it('should exist as a function', function() {
    expect(verifyKeys).to.exist;
    expect(verifyKeys).to.be.a('function');
  });

  it('should not throw if all keys are present', function() {
    const verify = () => {
      verifyKeys(inputs.validKeys, inputs.requiredKeys);
    }

    expect(verify).to.not.throw();
  });

  it('should throw if any keys are missing', function() {
    const verify = () => {
      verifyKeys(inputs.missingSomeKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });

  it('should throw if all keys are missing', function() {
    const verify = () => {
      verifyKeys(inputs.missingAllKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });

  it('should throw if only invalid keys are given', function() {
    const verify = () => {
      verifyKeys(inputs.invalidKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });
});

module.exports.inputs = inputs;
