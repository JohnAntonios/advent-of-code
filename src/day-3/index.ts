import { resolve } from "path";
import readTextFile from "../utils/readTextFile";

(async () => {
  const filePath = resolve(__dirname, "file_sample.txt");

  const diagnostics = await readTextFile(filePath);

  console.log(diagnostics);
})();
