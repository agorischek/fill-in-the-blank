import { percents } from '../content/percents.js';
import { blank } from '../shared/blank.js';

/** A percentage, such as "90%"
 * @example
 * ```ts
 * `I am ${percent} sure`
 * // "I am 90% sure"
 * ```
 */
export const percent = blank(...percents);
