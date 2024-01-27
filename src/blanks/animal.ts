import { animals } from '../content/animals.js';
import { blank } from '../shared/blank.js';

/** An animal, such as "tiger"
 * @example
 * ```ts
 * `How fast is a ${animal}?`
 * // "How fast is a tiger?"
 * ```
 */
export const animal = blank(...animals);
