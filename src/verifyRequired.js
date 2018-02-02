const verifyKeys = require('./verifyKeys');
const verifySchema = require('./verifySchema');

const verifyRequired = (options, required) => {
  if (!options || typeof options !== 'object') {
    throw new Error('Invalid Argument');
  }

  if (Array.isArray(required)) {
    verifyKeys(options, required);
  } else if (typeof required === 'object') {
    verifySchema(options, required);
  } else {
    throw new Error('Invalid Argument');
  }
};

module.exports = verifyRequired;
