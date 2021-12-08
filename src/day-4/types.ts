export type DidMatch = boolean;

export interface BingoBoard {
  [num: number]: DidMatch;
}

export interface BingoBoardContainer {
  boardCount: number;
  boards: BingoBoard[];
}
