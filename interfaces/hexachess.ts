export interface IBoardProps {
    boardSize?: number;
    highlightTiles?: IHexaChessTile[];
    setSelectedPiece: (figure: IHexaChessPiece | null) => void;
    selectedPiece: IHexaChessPiece | null;
    pieces: IHexaChessPiece[];
}

export type TileType = 'none' | 'possibleMove' | 'possibleAttack';

export interface IHexaChessTile {
    position: HexPosition;
    type: TileType;
}

export interface HexPosition {
    q: number;
    r: number;
    s: number;
}

export interface IHexaChessPiece {
    type: 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
    color: 'white' | 'black';
    position: HexPosition;
}

export type pieceTypes = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';

export interface IPlayer {
    name: string;
    color: 'white' | 'black';
}

export interface IFiguresBoardProps {
    figures: IHexaChessPiece[];
    onFigureClick: (figure: IHexaChessPiece) => void;
    player: IPlayer;
}