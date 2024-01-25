export class State {
  used: number[] = [];
  last: number;
  clear() {
    this.used.length = 0;
  }
  record(index: number) {
    this.used.push(index);
    this.last = index;
  }
}
