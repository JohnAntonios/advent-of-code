import { resolve } from "path";
import readTextFile from "../utils/readTextFile";

// A string solution :), definitely less efficient

(async () => {
  const filePath = resolve(__dirname, "file.txt");

  const diagnostics = await readTextFile(filePath);

  const transposed: string[] = [];

  for (let i = 0; i < diagnostics.length; i++) {
    const diagnostic = diagnostics[i];

    if (!diagnostic) continue;

    for (let j = 0; j < diagnostic.length; j++) {
      if (!transposed[j]) {
        transposed[j] = "";
      }

      transposed[j] += diagnostic.charAt(j);
    }
  }

  const gammaString = transposed.reduce((currBinaryString, row) => {
    const numOnes = row.split("").filter((c) => c === "0").length;
    const numZeroes = row.split("").filter((c) => c === "1").length;

    if (numOnes > numZeroes) {
      return currBinaryString + "0";
    }

    return currBinaryString + "1";
  }, "");

  const epsilonString = gammaString
    .split("")
    .map((c) => (c === "0" ? "1" : "0"))
    .join("");

  const gamma = parseInt(gammaString, 2);
  const epsilon = parseInt(epsilonString, 2);

  const power = gamma * epsilon;

  console.log(power);
})();
