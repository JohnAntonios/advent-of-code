export interface Position {
  x: number;
  depth: number;
}

export type Instruction = [string, string | number] | string[];

export type CommandFunction = (
  currentPosition: Position,
  amount: number
) => Position;

export interface CommandCentre {
  [key: string]: CommandFunction;
}
