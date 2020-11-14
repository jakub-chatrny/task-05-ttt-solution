import React, { FC } from "react";
import Square from "./Square";

// Hint: Suggested components
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Status from "./Status";

type Player = "O" | "X";
type Indexes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type BoardState = Partial<Record<Indexes, Player>>;

// TODO: Write a function that takes board state and last changed index and calculates whether a player won
// const getWinner = ...

// TODO: Write a component that:
//   - represents the board of a tic tac toe game
//   - handles all the logic
//   - renders whole board and status of the game
const Board: FC = () => {
    // State
    // TODO: Add game state

    // Handlers
    // TODO: Write a function that accepts clicked index, set's its value on board and changes player
    // const onSquareClicked = ...

    // TODO: Write a function that resets the game state
    // const onBoardRestart = ...

    return <Square>Hello World!</Square>;
};

export default Board;
