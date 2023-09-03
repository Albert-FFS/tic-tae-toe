import { useState } from "react";
import "./mainBoard.css";
import Modal from "./modal";
type MarkValue = "" | "X" | "O";
type BoardValue = [
  [MarkValue, MarkValue, MarkValue],
  [MarkValue, MarkValue, MarkValue],
  [MarkValue, MarkValue, MarkValue]
];
const ListWinnerLines = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];
const DefaultBoard: BoardValue = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
export default function MainBoard() {
  const [player1, setPlayer1] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [Board, setBoard] = useState(DefaultBoard);
  const MarkCell = (r: number, c: number) => {
    if (!gameOver) {
      const newBoard = Board;
      newBoard[r][c] = player1 ? "O" : "X";
      IfHaveSomeWinner();
      setPlayer1(!player1);
      setBoard(newBoard);
    }
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
  const IfHaveSomeWinner = () => {
    ListWinnerLines.forEach((line, iteraction) => {
      const LineValues = [
        Board[line[0][0]][line[0][1]],
        Board[line[1][0]][line[1][1]],
        Board[line[2][0]][line[2][1]],
      ];
      if (LineValues.find((item) => item === "") === undefined) {
        if (
          LineValues[0] === LineValues[1] &&
          LineValues[0] === LineValues[2]
        ) {
          // alert(`Ganaste ${player1 ? "Jugador 1" : "Jugador 2"}`);
          setGameOver(true);
        }
      }
    });
  };
  const RestartGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setGameOver(false);
  };
  return (
    <div className="mainBoard">
      <table>
        <caption>
          {gameOver ? "Game Over !" : player1 ? "Jugador 1" : "Jugador 2"}
        </caption>
        <tbody>
          <tr>
            <td>
              <button
                className={ReturnClass(0, 0)}
                onClick={() => MarkCell(0, 0)}
                disabled={Board[0][0] !== "" ? true : false}
              >
                {Board[0][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(0, 1)}
                onClick={() => MarkCell(0, 1)}
                disabled={Board[0][1] !== "" ? true : false}
              >
                {Board[0][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(0, 2)}
                onClick={() => MarkCell(0, 2)}
                disabled={Board[0][2] !== "" ? true : false}
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
                disabled={Board[1][0] !== "" ? true : false}
              >
                {Board[1][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(1, 1)}
                onClick={() => MarkCell(1, 1)}
                disabled={Board[1][1] !== "" ? true : false}
              >
                {Board[1][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(1, 2)}
                onClick={() => MarkCell(1, 2)}
                disabled={Board[1][2] !== "" ? true : false}
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
                disabled={Board[2][0] !== "" ? true : false}
              >
                {Board[2][0]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(2, 1)}
                onClick={() => MarkCell(2, 1)}
                disabled={Board[2][1] !== "" ? true : false}
              >
                {Board[2][1]}
              </button>
            </td>
            <td>
              <button
                className={ReturnClass(2, 2)}
                onClick={() => MarkCell(2, 2)}
                disabled={Board[2][2] !== "" ? true : false}
              >
                {Board[2][2]}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {gameOver ? (
        <Modal
          restart={RestartGame}
          winner={player1 ? "Jugador 2" : "Jugador 1"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
