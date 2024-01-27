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
} from "../index.js";
import { wrap } from "../shared/wrap.js";

export const creativity = wrap(
  () =>
    ` Consider mentioning whichever one of these is most relevant: ${exercise}, ${animal}, the color ${color}, being ${emotion}, ${plant}, ${vehicle}, ${appliance}, ${shape}, ${musicGenre} music, or ${profession}.`
);
