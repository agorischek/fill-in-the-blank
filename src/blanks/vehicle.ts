import { vehicles } from "../content/vehicles.js";
import { blank } from "../shared/blank.js";

/** A vehicle, such as "bike"
 * @example
 * ```ts
 * `Can I get to Antarctica by ${vehicle}?`
 * // Can I get to Antarctica by bike?
 * ```
 */
export const vehicle = blank(...vehicles);
