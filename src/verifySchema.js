const verifyKeys = require('./verifyKeys');

const verifySchema = (obj, schema) => {
  const keys = Object.keys(schema);

  if (!obj) {
    throw new Error('Invalid/missing object requiring schema: ' + JSON.stringify(schema));
  }

  verifyKeys(obj, keys);

  keys.forEach(key => {
    const type = schema[key];
    const value = obj[key];

    if (Array.isArray(type)) {
      verifyKeys(value, type);
    } else if (typeof type === 'object') {
      verifySchema(value, type);
    } else if (typeof value !== type) {
      throw new Error(`Invalid type for key: ${key}`)
    }
  });
};

module.exports = verifySchema;
