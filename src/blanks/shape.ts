import { shapes } from "../content/shapes.js";
import { blank } from "../shared/blank.js";

/** A shape, such as "circle"
 * `What type of sign is a ${shape}?`
 * // What type of sign is a circle?
 */
export const shape = blank(...shapes);
