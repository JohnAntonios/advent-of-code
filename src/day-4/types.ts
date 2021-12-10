export interface BingoBoard {
  [key: number]: boolean;
}

export interface BingoBoards {
  [key: string]: BingoBoard;
}
