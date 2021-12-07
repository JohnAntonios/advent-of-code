import { resolve } from "path";
import readTextFile from "../utils/readTextFile";

(async () => {
  const filePath = resolve(__dirname, "file.txt");

  const measurements = await readTextFile(filePath);

  let increasedMeasurementsCount = 0;

  for (let i = 0; i <= measurements.length; i++) {
    if (i === 0) {
      continue;
    }

    const previous = measurements[i - 1];
    const current = measurements[i];

    if (!previous || !current) {
      continue;
    }

    const intPrevious = parseInt(previous);
    const intCurrent = parseInt(current);

    if (intCurrent > intPrevious) {
      increasedMeasurementsCount++;
    }
  }

  console.log(increasedMeasurementsCount);
})();
