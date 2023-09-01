import { useState } from "react";
import Cell from "./cell";
import "./mainBoard.css";
type MarkValue = "" | "X" | "O";
type BoardValue = [
  [MarkValue, MarkValue, MarkValue],
  [MarkValue, MarkValue, MarkValue],
  [MarkValue, MarkValue, MarkValue]
];
export default function MainBoard() {
  const [player1, setPlayer1] = useState<boolean>(true);
  const [Board, setBoard] = useState<BoardValue>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const MarkCell = (r: number, c: number) => {
    const newBoard = Board;
    newBoard[r][c] = player1 ? "O" : "X";
    setPlayer1(!player1);
    setBoard(newBoard);
  };
  const ReturnClass = (r: number, c: number): string => {
    switch (Board[r][c]) {
      case "X":
        return "player2";
      case "O":
        return "player1";
      default:
        return "";
    }
  };
  return (
    <div className="mainBoard">
      <table>
        <caption>{player1 ? "Jugador 1" : "   Jugador 2"}</caption>
        <tbody>
          <tr>
            <td>
              <button
                className={ReturnClass(0, 0)}
                onClick={() => MarkCell(0, 0)}
                disabled={(Board[0][0]!== "")?true:false}
              >
                {Board[0][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(0, 1)}
                onClick={() => MarkCell(0, 1)}
                disabled={(Board[0][1]!== "")?true:false}
              >
                {Board[0][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(0, 2)}
                onClick={() => MarkCell(0, 2)}
                disabled={(Board[0][2]!== "")?true:false}
              >
                {Board[0][2]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={ReturnClass(1, 0)}
                onClick={() => MarkCell(1, 0)}
                disabled={(Board[1][0]!== "")?true:false}
              >
                {Board[1][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(1, 1)}
                onClick={() => MarkCell(1, 1)}
                disabled={(Board[1][1]!== "")?true:false}
              >
                {Board[1][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(1, 2)}
                onClick={() => MarkCell(1, 2)}
                disabled={(Board[1][2]!== "")?true:false}
              >
                {Board[1][2]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={ReturnClass(2, 0)}
                onClick={() => MarkCell(2, 0)}
                disabled={(Board[2][0]!== "")?true:false}
              >
                {Board[2][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(2, 1)}
                onClick={() => MarkCell(2, 1)}
                disabled={(Board[2][1]!== "")?true:false}
              >
                {Board[2][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(2, 2)}
                onClick={() => MarkCell(2, 2)}
                disabled={(Board[2][2]!== "")?true:false}
              >
                {Board[2][2]}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
