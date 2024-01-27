import { Blank } from './blank.js';

export function wrap(original: () => string): Blank {
  const wrapped = function () {
    return original();
  };
  wrapped.toString = original;
  return wrapped;
}
