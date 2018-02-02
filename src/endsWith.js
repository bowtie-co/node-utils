const endsWith = (subject, search) => {
  const hasEnding = (str) => {
    const regex = new RegExp(str + "$");
    return regex.test(subject)
  }

  if (Array.isArray(search)) {
    return search.some(k => hasEnding(k));
  } else {
    return hasEnding(search);
  }
};

module.exports = endsWith;
