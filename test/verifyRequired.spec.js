const expect = require('chai').expect;
const { verifyRequired } = require('../src');

const verifyKeysInputs = require('./verifyKeys.spec').inputs;
const verifySchemaInputs = require('./verifySchema.spec').inputs;

const inputs = Object.assign({}, verifyKeysInputs, verifySchemaInputs);

describe('verifyRequired', function() {
  it('should exist as a function', function() {
    expect(verifyRequired).to.exist;
    expect(verifyRequired).to.be.a('function');
  });

  it('should not throw with a valid schema', function() {
    const verify = () => {
      verifyRequired(inputs.validObject, inputs.requiredSchema);
    };

    expect(verify).to.not.throw();
  });

  it('should throw with an invalid schema', function() {
    const verify = () => {
      verifyRequired(inputs.invalidObject, inputs.requiredSchema);
    };

    expect(verify).to.throw();
  });

  it('should not throw if all keys are present', function() {
    const verify = () => {
      verifyRequired(inputs.validKeys, inputs.requiredKeys);
    }

    expect(verify).to.not.throw();
  });

  it('should throw if any keys are missing', function() {
    const verify = () => {
      verifyRequired(inputs.missingSomeKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });

  it('should throw if all keys are missing', function() {
    const verify = () => {
      verifyRequired(inputs.missingAllKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });

  it('should throw if only invalid keys are given', function() {
    const verify = () => {
      verifyRequired(inputs.invalidKeys, inputs.requiredKeys);
    }

    expect(verify).to.throw();
  });
});

module.exports.inputs = inputs;
