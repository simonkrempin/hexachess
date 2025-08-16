export type PieceType = "king" | "queen" | "bishop" | "rook" | "knight" | "pawn";

export const game_board = [
	Array(6), //a
	Array(7), //b
	Array(8), //c
	Array(9), //d
	Array(10), //e
	Array(11), //f
	Array(10), //g
	Array(9), //h
	Array(8), //i
	Array(7), //j
	Array(6), //k
]

interface GameState {

}

export function move(input: GameState): GameState {
	return input;
}

interface BoardIndex {
	col: number
	row: number
}

export function getMoves(piece: string, position: BoardIndex): BoardIndex[] {
	const { col, row } =position
	switch (piece) {
		case "king":
			return [{ col: col + 1, row }, { col, row: row + 1 }, { col: col - 1, row: row + 1 }, { col, row: row - 1 }, { col: col - 1, row }, { col: col - 1, row: row + 1 }]
		default:
			throw new Error("Invalid piece")
	}
}