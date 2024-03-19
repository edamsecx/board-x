import type { Piece } from '../piece';
import { Row } from '../row';

export class Board<T = any> {
    constructor(
        private value: (Row<T> | null) []
    ) {}

    index(index: number) {
        if (index < 0 || (index | 0) !== index) {
            throw new Error()
        }

        if (index > this.value.length - 1) {
            this.value = this.value.concat(Array(index - this.value.length + 1).fill(new Row<T>([])));
        }

        const self = this;

        return {
            set(targetValue: (Piece<T> | null)[]) {
                return self.value[index] = new Row<T>(targetValue);
            },
            get(): (Piece<T> | null)[] | null {
                if  (!self.value[index]) return null;
                return self.value[index]!.get();
            },
            index: (index: number) => {
                if (!self.value[index]) return null;
                return self.value[index]!.index(index);
            }
        }
    }

    set(targetValue: (Row<T> | null)[]) {
        this.value = targetValue;
    }

    get() {
        return this.value;
    }
}