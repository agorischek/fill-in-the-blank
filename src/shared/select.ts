import { State } from "./State.js";

export function select(options: string[], state: State) {
  if (options.length === 0) return "";
  else if (options.length === 1) return options[0];
  else {
    if (state.used.length >= options.length) state.clear();
    const all = Array.from(Array(options.length).keys());
    const available =
      state.used.length === 0
        ? all.filter((i) => i !== state.last)
        : all.filter((i) => !state.used.includes(i));
    const index =
      available.length === 1
        ? available[0]
        : available[Math.floor(Math.random() * available.length)];
    const selected = options[index];
    state.record(index);
    return selected;
  }
}
