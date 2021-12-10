import { resolve } from "path";
import readTextFile from "../utils/readTextFile";
import { BingoBoards } from "./types";

(async () => {
  const filePath = resolve(__dirname, "file_sample.txt");

  const bingoGame = await readTextFile(filePath);

  const numbersToDraw = bingoGame[0]?.split(",").map((c) => parseInt(c)) || [];

  const bingoBoards: BingoBoards = {};

  const keyPrefix = `Board_`;

  bingoGame.slice(1).forEach((bingoInput, idx, arr) => {
    const keyValue = Object.keys(bingoBoards).length + 1;

    if (!bingoInput && arr[idx + 1]) {
      bingoBoards[keyPrefix + keyValue] = {};
    } else {
      const bingoNumbers = bingoInput
        .replace(/\s\s/g, " ")
        .split(" ")
        .map((n) => parseInt(n));

      bingoNumbers.forEach((n) => {
        bingoBoards[keyPrefix + (keyValue - 1)] = {
          ...bingoBoards[keyPrefix + (keyValue - 1)],
          [n]: false,
        };
      });
    }
  });

  numbersToDraw.forEach((drawnNumber) => {
    Object.entries(bingoBoards).forEach(([, board]) => {
      board[drawnNumber] = drawnNumber in board;
    });
  });

  console.log(bingoBoards);
})();
