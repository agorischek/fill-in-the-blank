import { programmingLanguages } from "../content/programmingLanguages.js";
import { blank } from "../shared/blank.js";

/** A programming language, such as "TypeScript"
 * @example
 * ```ts
 * `Write a sort algorithm in ${programmingLanguage}`
 * // Write a sort algorithm in TypeScript
 * ```
 */
export const programmingLanguage = blank(...programmingLanguages);
