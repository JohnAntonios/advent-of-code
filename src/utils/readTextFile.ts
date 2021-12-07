import { readFile } from "fs/promises";

export default async (filePath: string): Promise<string[]> => {
  const buffer = await readFile(filePath);

  const string = buffer.toString();

  const stringArray = string.split("\r").map((s) => s.trim());

  return stringArray;
};
