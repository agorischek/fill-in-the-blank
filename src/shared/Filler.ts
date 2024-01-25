import { select } from "./select.js";
import { State } from "./State.js";

export class Filler {
  state = new State();
  constructor(private options: string[]) {}
  build() {
    return () => select(this.options, this.state);
  }
}
