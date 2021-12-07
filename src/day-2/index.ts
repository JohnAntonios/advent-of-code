import { resolve } from "path";
import readTextFile from "../utils/readTextFile";
import { CommandCentre, CommandFunction, Instruction, Position } from "./types";

const moveForward: CommandFunction = (currentPosition, amount) => ({
  ...currentPosition,
  x: currentPosition.x + amount,
});

const moveUp: CommandFunction = (currentPosition, amount) => ({
  ...currentPosition,
  depth: currentPosition.depth - amount,
});

const moveDown: CommandFunction = (currentPosition, amount) => ({
  ...currentPosition,
  depth: currentPosition.depth + amount,
});

const COMMAND_CENTRE: CommandCentre = {
  forward: moveForward,
  up: moveUp,
  down: moveDown,
};

(async () => {
  const filePath = resolve(__dirname, "file.txt");

  const instructions = await readTextFile(filePath);

  const initialPosition: Position = {
    x: 0,
    depth: 0,
  };

  const position = instructions.reduce(
    (currentPosition = initialPosition, currentInstruction: string) => {
      let [action, amount]: Instruction = currentInstruction.split(" ");

      if (!action || !amount) {
        return currentPosition;
      }

      action = action.toLowerCase();
      amount = parseInt(amount.toString());

      const actionFunction = COMMAND_CENTRE[action];

      if (!actionFunction) {
        return currentPosition;
      }

      return actionFunction(currentPosition, amount);
    },
    initialPosition
  );

  const calculatedPosition = position.x * position.depth;

  console.log(calculatedPosition);
})();
