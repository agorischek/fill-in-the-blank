import { Filler } from "./Filler.js";

export function blank(...options: string[]) {
  return new Filler(options).build();
}
