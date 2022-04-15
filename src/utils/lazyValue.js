// lazy-value by sindresorhus

export default fn => {
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
