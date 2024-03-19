import { Board } from "./board";
import { Piece } from "./piece";
import { Row } from "./row";

console.log("[Sandbox]");

// type safe
const board = new Board<number>([
    new Row([
        new Piece(1),
        new Piece(2),
        new Piece(3),
    ]),
    new Row([
        new Piece(4),
        new Piece(5),
        new Piece(6),
    ]),
    new Row([
        new Piece(7),
        new Piece(8),
        new Piece(9),
    ])
]);

console.log(board.index(4).get())