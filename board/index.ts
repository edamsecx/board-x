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

        // safe cast
        return this.value[index] as Row<T>;
    }

    set(targetValue: (Row<T> | null)[]) {
        this.value = targetValue;
    }

    get() {
        return this.value;
    }
}