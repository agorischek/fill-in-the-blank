import { Filler } from "./Filler.js";

export type Blank = () => string;

export function blank(...options: string[]): Blank {
  return new Filler(options).build();
}
