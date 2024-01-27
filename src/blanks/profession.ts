import { professions } from '../content/professions.js';
import { blank } from '../shared/blank.js';

/** A profession, such as "artist"
 * @example
 * ```ts
 * `You are an award-winning ${profession}`
 * // "You are an award-winning artist"
 * ```
 */
export const profession = blank(...professions);
