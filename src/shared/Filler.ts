import { Blank } from "./blank.js";
import { select } from "./select.js";
import { State } from "./State.js";

export class Filler {
  state = new State();
  constructor(private options: string[]) {}
  build(): Blank {
    const fn = () => select(this.options, this.state);
    const blank = function () {
      return fn();
    };
    blank.toString = fn;
    return blank;
  }
}
