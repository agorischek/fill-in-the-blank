import {
  animal,
  appliance,
  emotion,
  exercise,
  musicGenre,
  plant,
  profession,
  shape,
  vehicle,
} from '../index.js';
import { wrap } from '../shared/wrap.js';

const kinds = [
  exercise,
  animal,
  emotion,
  plant,
  vehicle,
  appliance,
  shape,
  musicGenre,
  profession,
];

/** Provides random inspiration for a model to consider when generating a response
 * @example
 * ```ts
 * const prompt = "Tell me a joke." + creativity;
 * // "Tell me a joke. Use 'toaster' for creative inspiration."
 * ```
 */
export const creativity = wrap(() => {
  const index = Math.floor(Math.random() * kinds.length);
  const topic = kinds[index]();
  const content = ` Use '${topic}' for creative inspiration.`;
  return content;
});
