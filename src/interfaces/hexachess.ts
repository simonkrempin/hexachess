import { Piece } from "@core/pieces/piece";

export interface HexPosition  {
    q: number;
    r: number;
    s: number;
}

export interface HexTile {
    position: HexPosition;
    type: TileType;
}

export type TileType = "none" | "possibleMove" | "possibleAttack";

export type pieceTypes = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";


export enum PlayerTypes {
    white,
    black
}

export type Player = PlayerTypes;

export interface BoardContext {
    state: BoardState;
    dispatch: React.Dispatch<BoardAction>;
}

export interface BoardState {
    selectedPiece: Piece | null;
    currentPlayer: Player;
    highlightedTiles: HexTile[];
}

export type BoardAction = Partial<BoardState>;