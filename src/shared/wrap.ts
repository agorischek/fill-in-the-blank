export function wrap(original: () => string) {
  const wrapped = function () {
    return original();
  };
  wrapped.toString = original;
  return wrapped;
}
