import { Blank } from "./blank.js";
import { select } from "./select.js";
import { State } from "./State.js";
import { wrap } from "./wrap.js";

export class Filler {
  state = new State();
  constructor(private options: string[]) {}
  build(): Blank {
    return wrap(() => select(this.options, this.state));
  }
}
