const startsWith = (subject, search) => {
  const hasBeginning = (str) => {
    const regex = new RegExp("^" + str);
    return regex.test(subject)
  }

  if (Array.isArray(search)) {
    return search.some(k => hasBeginning(k));
  } else {
    return hasBeginning(search);
  }
};

module.exports = startsWith;
