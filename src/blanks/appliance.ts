import { appliances } from '../content/appliances.js';
import { blank } from '../shared/blank.js';

/** An appliance, such as "refrigerator"
 * @example
 * ```ts
 * `Is your ${appliance} running?`
 * // "Is your refrigerator running?"
 * ```
 */
export const appliance = blank(...appliances);
