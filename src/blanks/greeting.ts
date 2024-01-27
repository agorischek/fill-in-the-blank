import { greetings } from "../content/greetings.js";
import { blank } from "../shared/blank.js";

/** A greeting, such as "hello"
 * @example
 * ```ts
 * `Introduce yourself to the user with ${greeting}`
 * // "Introduce yourself to the user with hello"
 * ```
 */
export const greeting = blank(...greetings);
