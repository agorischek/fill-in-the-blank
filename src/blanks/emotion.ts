import { emotions } from "../content/emotions.js";
import { blank } from "../shared/blank.js";

/** An emotion, such as "happy"
 * @example
 * ```ts
 * `I feel ${emotion}`
 * // "I feel happy"
 * ```
 */
export const emotion = blank(...emotions);
