import { exercises } from '../content/exercises.js';
import { blank } from '../shared/blank.js';

/** An exercise, such as "running"
 * @example
 * ```ts
 * `How hard is it to juggle while ${exercise}?`
 * // "How hard is it to juggle while running?"
 * ```
 */
export const exercise = blank(...exercises);
