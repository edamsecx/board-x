export class Piece<T = any> {
  constructor(private value: T) {}

  set(targetValue: T) {
    this.value = targetValue;
  }

  get() {
    return this.value;
  }
}
