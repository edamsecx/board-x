import { Piece } from "../piece";

export class List<T = any> {
    constructor(
        private value: (Piece<T> | null)[]
    ) {}

    index(index: number) {
        if (index < 0 || (index | 0) !== index) {
            throw new Error()
        }

        if (index > this.value.length) {
            this.value = this.value.concat(Array(index - this.value.length + 1).fill(new Piece<T | null>(null)));
        }

        // safe cast
        return this.value[index] as Piece<T>;
    }

    set(targetValue: (Piece<T> | null)[]) {
        return this.value = targetValue;
    }

    get() {
        return this.value;
    }
}