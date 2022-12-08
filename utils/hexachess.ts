import { IHexaChessPiece, HexPosition, HexTile, TileType } from "../interfaces/hexachess";
import { boardSize, pieces } from "../core/gameengine";
import { Piece } from "../core/pieces/piece";

export const directionalMove = (piece: Piece, dir: HexPosition): HexTile[] => {
    const res: HexTile[] = [];
    for (let i = 1; i < boardSize * 2; i++) {
        const newPos = {
            q: piece.position.q + dir.q * i,
            r: piece.position.r + dir.r * i,
            s: piece.position.s + dir.s * i,
        };

        const testedTile = filterBlockedTiles([newPos], pieces);

        if (testedTile.length === 0) break;
        if (testedTile[0].type === 'possibleAttack') {
            res.push(testedTile[0]);
            break;
        }
        res.push({ position: newPos, type: 'possibleMove' });
    }
    return res;

    //TODO: Könnte man hier nicht einfach einmal am Ende filtern und nach dem Attack / blocked Event alles entfernen?
};

export const filterBlockedTiles = (tiles: HexPosition[], pieces: IHexaChessPiece[], playerColor?: 'white' | 'black'): HexTile[] => {
    if (!tiles || !pieces) return [];

    const res: HexTile[] = [];
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        const piece = pieces.find((p) => p.position.q === tile.q && p.position.r === tile.r && p.position.s === tile.s);

        if (piece === undefined) res.push({ position: { q: tile.q, r: tile.r, s: tile.s }, type: 'possibleMove' });

        if (piece?.color !== playerColor) res.push({ position: { q: tile.q, r: tile.r, s: tile.s }, type: 'possibleAttack' });
    }

    return res;
};

export const highlightTilesContains = (position: HexPosition, tiles: HexTile[]): TileType | undefined => {
    return (
        tiles.find((tile) => tile.position.q === position.q && tile.position.r === position.r && tile.position.s === position.s)
            ?.type ?? "none"
    );
};

export const diagonalMoves = (piece: Piece) => [
    ...directionalMove(piece, { q: 1, r: -2, s: 1 }),
    ...directionalMove(piece, { q: 2, r: -1, s: -1 }),
    ...directionalMove(piece, { q: 1, r: -2, s: 1 }),
    ...directionalMove(piece, { q: -1, r: -1, s: 2 }),
    ...directionalMove(piece, { q: -2, r: 1, s: 1 }),
    ...directionalMove(piece, { q: -1, r: -1, s: 2 }),
];

export const straightMoves = (piece: Piece) => [
    ...directionalMove(piece, { q: 1, r: -1, s: 0 }),
    ...directionalMove(piece, { q: 0, r: -1, s: 1 }),
    ...directionalMove(piece, { q: -1, r: 0, s: 1 }),
    ...directionalMove(piece, { q: -1, r: 1, s: 0 }),
    ...directionalMove(piece, { q: 0, r: 1, s: -1 }),
    ...directionalMove(piece, { q: 1, r: 0, s: -1 }),
];