export class Piece<T = any> {
  constructor(private value: T) {}

  set(targetValue: T) {
    return this.value = targetValue;
  }

  get() {
    return this.value;
  }
}
