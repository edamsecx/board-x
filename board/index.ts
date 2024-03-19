import { List } from "../list";

export class Board<T = any> {
  constructor(private value: (List<T> | null)[]) {}

  index(index: number) {
    if (index < 0 || (index | 0) !== index) {
      throw new Error();
    }

    if (index > this.value.length - 1) {
      this.value = this.value.concat(
        Array(index - this.value.length + 1).fill(new List<T>([])),
      );
    }

    // safe cast
    return this.value[index] as List<T>;
  }

  set(targetValue: (List<T> | null)[]) {
    this.value = targetValue;
  }

  get() {
    return this.value;
  }
}
