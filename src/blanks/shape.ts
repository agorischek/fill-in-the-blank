import { shapes } from '../content/shapes.js';
import { blank } from '../shared/blank.js';

/** A shape, such as "octagon"
 * @example
 * ```ts
 * `What type of sign is shaped like a ${shape}?`
 * // "What type of sign is shaped like a octagon?"
 * ```
 */
export const shape = blank(...shapes);
