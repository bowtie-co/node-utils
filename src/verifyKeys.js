const verifyKeys = (obj, keys) => {
  keys.forEach(key => {
    if (typeof obj[key] === 'undefined') {
      throw Error(`Missing required key: ${key}`)
    }
  });
};

module.exports = verifyKeys;
