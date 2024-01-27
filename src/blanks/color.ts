import { colors } from '../content/colors.js';
import { blank } from '../shared/blank.js';

/** A color, such as "blue"
 * @example
 * ```ts
 * `What color goes well with ${color}?`
 * // "What color goes well with blue?"
 * ```
 */
export const color = blank(...colors);
