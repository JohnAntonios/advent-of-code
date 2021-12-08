import { resolve } from "path";
import readTextFile from "../utils/readTextFile";
import { BingoBoard, BingoBoardContainer } from "./types";

(async () => {
  const filePath = resolve(__dirname, "file_sample.txt");

  const bingoGame = await readTextFile(filePath);

  const numbersToDraw = bingoGame[0]?.split(",").map((c) => parseInt(c)) || [];

  const initialBingoBoardContainer: BingoBoardContainer = {
    boardCount: 0,
    boards: [],
  };

  const bingoBaordContainer = bingoGame
    .slice(1)
    .reduce(
      (accBingoBoardContainer: BingoBoardContainer, bingoInput, idx, arr) => {
        if (!bingoInput && arr[idx + 1]) {
          const newBoardCount = accBingoBoardContainer.boardCount + 1;
          return {
            ...accBingoBoardContainer,
            boardCount: newBoardCount,
            boards: [...accBingoBoardContainer.boards, {}],
          };
        }

        const bingoNumber = parseInt(bingoInput);

        return {
          ...accBingoBoardContainer,
          boards: accBingoBoardContainer.boards.map(
            (bingoBoard: BingoBoard, idx: number) => {
              if (idx + 1 === accBingoBoardContainer.boardCount) {
                return {
                  ...accBingoBoardContainer.boards[idx],
                  [bingoNumber]: false,
                };
              }
              return bingoBoard;
            }
          ),
        };
      },
      initialBingoBoardContainer
    );

  console.log(bingoBaordContainer);
})();
