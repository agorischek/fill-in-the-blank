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

export const creativity = () =>
  `Consider mentioning whichever one (only one!) of these is most relevant: ${exercise}, ${animal}, ${color}, being ${emotion}, ${plant}, ${vehicle}, ${appliance}, ${shape}, ${musicGenre} music, or ${profession}.`;
