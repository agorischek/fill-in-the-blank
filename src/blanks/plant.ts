import { plants } from "../content/plants.js";
import { blank } from "../shared/blank.js";

/** A plant, such as "lavender"
 * @example
 * ```ts
 * `Where does ${plant} grow?`
 * // Where does lavender grow?
 * ```
 */
export const plant = blank(...plants);
