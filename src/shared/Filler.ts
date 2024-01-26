import { Blank } from "./blank.js";
import { select } from "./select.js";
import { State } from "./State.js";

export class Filler {
  state = new State();
  constructor(private options: string[]) {}
  build(): Blank {
    const lambda = () => select(this.options, this.state);
    const fn = function () {
      return lambda();
    };
    fn.toString = lambda;
    return fn;
  }
}
