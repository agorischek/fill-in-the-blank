import {
  animal,
  appliance,
  color,
  emotion,
  exercise,
  musicGenre,
  plant,
  profession,
  shape,
  vehicle,
} from '../index.js';
import { wrap } from '../shared/wrap.js';

/** Provides a variety of topics for a model to consider when generating a response
 *
 * @remarks
 * The results of using `creativity` will vary greatly depending on your model, settings, and other prompt content.
 * Expect to iterate on your prompt and settings to get the desired results.
 *
 * @example
 * ```ts
 * const prompt = "Tell me a joke." + creativity;
 * // "Tell me a joke. Consider mentioning one of the following topics..."
 * ```
 */
export const creativity = wrap(
  () =>
    ` Consider mentioning whichever **ONE** of these is most relevant: ${exercise}, ${animal}, the color ${color}, being ${emotion}, ${plant}, ${vehicle}, ${appliance}, ${shape}, ${musicGenre} music, or ${profession}.`,
);
