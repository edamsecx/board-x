import { Board } from "./board";
import { Piece } from "./piece";
import { List } from "./list";

console.log("[Sandbox]");

// type safe
const board = new Board<number>([
    new List([
        new Piece(1),
        new Piece(2),
        new Piece(3),
    ]),
    new List([
        new Piece(4),
        new Piece(5),
        new Piece(6),
    ]),
    new List([
        new Piece(7),
        new Piece(8),
        new Piece(9),
    ])
]);

console.log(board.get()[0])