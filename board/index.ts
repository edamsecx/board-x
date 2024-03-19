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

        if (this.value.length > index) {
            this.value = this.value.concat(Array(index - this.value.length + 1).fill(null));
        }

        const self = this;

        return {
            set(targetValue: (Piece<T> | null)[]) {
                self.value[index] = new Row<T>(targetValue);
            },
            get(): (Piece<T> | null)[] | null {
                if  (!self.value[index]) return null;
                return self.value[index]!.get();
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