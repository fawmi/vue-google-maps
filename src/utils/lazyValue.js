// lazy-value by sindresorhus

module.exports = fn => {
  let called = false;
  let result;

  return () => {
    if (!called) {
      called = true;
      result = fn();
    }

    return result;
  };
};
