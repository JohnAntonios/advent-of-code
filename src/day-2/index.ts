import { resolve } from "path";
import readTextFile from "../utils/readTextFile";

(async () => {
  const filePath = resolve(__dirname, "file.txt");

  const instructions = await readTextFile(filePath);

  let xPos = 0;
  let depth = 0;

  instructions.forEach((instruction) => {
    const [action, amount] = instruction.split(" ");

    if (!action || !amount) {
      return;
    }

    switch (action.trim().toLowerCase()) {
      case "forward":
        xPos += parseInt(amount);
        break;

      case "up":
        depth -= parseInt(amount);
        break;

      case "down":
        depth += parseInt(amount);
        break;

      default:
        break;
    }
  });

  const position = xPos * depth;

  console.log(position);
})();
