import { letters } from '../content/letters.js';
import { blank } from '../shared/blank.js';

/** A letter, such as "y"
 * @example
 * ```ts
 * `How many ${letter}'s are in yoyo?`
 * // "How many y's are in yoyo?"
 * ```
 */
export const letter = blank(...letters);
