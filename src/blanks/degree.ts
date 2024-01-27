import { degrees } from '../content/degrees.js';
import { blank } from '../shared/blank.js';

/** A degree of intensity, such as "very"
 * @example
 * ```ts
 * `Write me a joke that's ${degree} funny`
 * // "Write me a joke that's very funny"
 * ```
 */
export const degree = blank(...degrees);
