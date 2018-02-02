const expect = require('chai').expect;
const { verifySchema } = require('../');

describe('verifySchema', function() {
  it('should exist as a function', function() {
    expect(verifySchema).to.exist;
    expect(verifySchema).to.be.a('function');
  });

  it('should not throw with a valid schema', function() {
    const opts = {
      something: 'hello world',
      object: {
        key: 'value',
        enabled: true
      }
    };

    const schema = {
      something: 'string',
      object: {
        key: 'string',
        enabled: 'boolean'
      }
    };

    expect(() => { verifySchema(opts, schema) }).to.not.throw();
  });

  it('should throw with an invalid schema', function() {
    const opts = {
      something: 'hello world',
      object: {
        key: 'value',
        enabled: true
      }
    };

    const schema = {
      something: 'string',
      object: 'not an object'
    };

    expect(() => { verifySchema(opts, schema) }).to.throw();
  });
});
