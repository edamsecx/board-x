import { Piece } from "../piece";

export class Row<T = any> {
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

        const self = this;

        return {
            set(targetValue: T) {
                return self.value[index] = new Piece<T>(targetValue);
            },
            get(): T | null {
                if  (!self.value[index]) return null;
                return self.value[index]!.get();
            }
        }
    }

    set(targetValue: (Piece<T> | null)[]) {
        return this.value = targetValue;
    }

    get() {
        return this.value;
    }
}