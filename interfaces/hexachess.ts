import { Piece } from './../core/pieces/piece';

export interface IBoardProps {
    boardSize?: number;
    highlightTiles?: HexTile[];
    setSelectedPiece: (piece: Piece | null) => void;
    selectedPiece: Piece | null;
    pieces: Piece[];
    onTileClicked: (event: any, source: any) => void;
}

export type TileType = 'none' | 'possibleMove' | 'possibleAttack';

export interface HexTile {
    position: HexPosition;
    type: TileType;
}

export interface HexPosition {
    q: number;
    r: number;
    s: number;
}

export type pieceTypes = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';

export interface Player {
    name: string;
    color: 'white' | 'black';
}

export interface PieceBoardProps {
    pieces: Piece[];
    onPieceClicked: (event: any, source: any) => void;
    player: Player;
}