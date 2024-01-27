import { musicGenres } from '../content/musicGenres.js';
import { blank } from '../shared/blank.js';

/** A musical genre, such as "pop"
 * @example
 * ```ts
 * `Write ${musicGenre} lyrics about juggling.`
 * // "Write pop lyrics about juggling."
 * ```
 */
export const musicGenre = blank(...musicGenres);
