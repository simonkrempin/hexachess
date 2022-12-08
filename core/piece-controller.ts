import { HexPosition, HexTile } from "../interfaces/hexachess";
import { boardSize } from "./game-engine";
import { PlayerController } from "./player-controller";

import { Piece } from "./pieces/piece";
import { King } from "./pieces/king";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Knight } from "./pieces/knights";
import { Bishop } from "./pieces/bishop";

export class PieceController {
    private static _pieces = [
        new King("black", { q: 1, r: 4, s: -5 }),
        new Queen("black", { q: -1, r: 5, s: -4 }),
        new Rook("black", { q: 3, r: 2, s: -5 }),
        new Rook("black", { q: -3, r: 5, s: -2 }),
        new Bishop("black", { q: 0, r: 5, s: -5 }),
        new Bishop("black", { q: 0, r: 4, s: -4 }),
        new Bishop("black", { q: 0, r: 3, s: -3 }),
        new Knight("black", { q: 2, r: 3, s: -5 }),
        new Knight("black", { q: -2, r: 5, s: -3 }),
        new Pawn("black", { q: 4, r: 1, s: -5 }),
        new Pawn("black", { q: 3, r: 1, s: -4 }),
        new Pawn("black", { q: 2, r: 1, s: -3 }),
        new Pawn("black", { q: 1, r: 1, s: -2 }),
        new Pawn("black", { q: 0, r: 1, s: -1 }),
        new Pawn("black", { q: -1, r: 2, s: -1 }),
        new Pawn("black", { q: -2, r: 3, s: -1 }),
        new Pawn("black", { q: -3, r: 4, s: -1 }),
        new Pawn("black", { q: -4, r: 5, s: -1 }),
    
        new King("white", { q: -1, r: -4, s: 5 }),
        new Queen("white", { q: 1, r: -5, s: 4 }),
        new Rook("white", { q: 3, r: -5, s: 2 }),
        new Rook("white", { q: -3, r: -2, s: 5 }),
        new Bishop("white", { q: 0, r: -5, s: 5 }),
        new Bishop("white", { q: 0, r: -4, s: 4 }),
        new Bishop("white", { q: 0, r: -3, s: 3 }),
        new Knight("white", { q: -2, r: -3, s: 5 }),
        new Knight("white", { q: 2, r: -5, s: 3 }),
        new Pawn("white", { q: -4, r: -1, s: 5 }),
        new Pawn("white", { q: -3, r: -1, s: 4 }),
        new Pawn("white", { q: -2, r: -1, s: 3 }),
        new Pawn("white", { q: -1, r: -1, s: 2 }),
        new Pawn("white", { q: 0, r: -1, s: 1 }),
        new Pawn("white", { q: 1, r: -2, s: 1 }),
        new Pawn("white", { q: 2, r: -3, s: 1 }),
        new Pawn("white", { q: 3, r: -4, s: 1 }),
        new Pawn("white", { q: 4, r: -5, s: 1 }),
    ];
    
    public static getPieceByPosition = (searchPosition: HexPosition): Piece | undefined => {
        const index = this.returnIndexOfPiece(searchPosition);
        if (index < 0) return undefined;

        return this._pieces[index];
    }

    public static removePieceByPosition = (searchPosition: HexPosition) => {
        const index = this.returnIndexOfPiece(searchPosition);
        if (index < 0) return;

        this._pieces.splice(index, 1);
    }

    private static returnIndexOfPiece = (searchPosition: HexPosition): number => {
        for (let i = 0; i < this._pieces.length; i++) {
            const piece = this._pieces[i];
            if (
                searchPosition.q === piece.position.q &&
                searchPosition.r === piece.position.r &&
                searchPosition.s === piece.position.s
            ) return i;
        }
        return -1;
    }

    public static get pieces() {
        return this._pieces;
    }

    static diagonalMoves = (piece: Piece) => [
        ...this.directionalMove(piece, { q: 1, r: -2, s: 1 }),
        ...this.directionalMove(piece, { q: 2, r: -1, s: -1 }),
        ...this.directionalMove(piece, { q: 1, r: 1, s: -2 }),
        ...this.directionalMove(piece, { q: -1, r: 2, s: -1 }),
        ...this.directionalMove(piece, { q: -2, r: 1, s: 1 }),
        ...this.directionalMove(piece, { q: -1, r: -1, s: 2 }),
    ];

    static straightMoves = (piece: Piece) => [
        ...this.directionalMove(piece, { q: 1, r: -1, s: 0 }),
        ...this.directionalMove(piece, { q: 0, r: -1, s: 1 }),
        ...this.directionalMove(piece, { q: -1, r: 0, s: 1 }),
        ...this.directionalMove(piece, { q: -1, r: 1, s: 0 }),
        ...this.directionalMove(piece, { q: 0, r: 1, s: -1 }),
        ...this.directionalMove(piece, { q: 1, r: 0, s: -1 }),
    ];

    private static directionalMove = (piece: Piece, dir: HexPosition): HexTile[] => {
        const moves: HexTile[] = [];

        for (let i = 1; i < 11; i++) { // 11 is the highest possible distance
            const newPos = {
                q: piece.position.q + dir.q * i,
                r: piece.position.r + dir.r * i,
                s: piece.position.s + dir.s * i,
            };
    
            const testedTile = this.filterBlockedTiles([newPos]);
    
            if (testedTile.length === 0) break;
    
            if (testedTile[0].type === 'possibleAttack') {
                moves.push(testedTile[0]);
                break;
            }
    
            moves.push({ position: newPos, type: 'possibleMove' });
        }

        return moves;
    };

    public static filterBlockedTiles = (tilesToFilter: HexPosition[]): HexTile[] => {    
        const filteredTiles: HexTile[] = [];

        for (let i = 0; i < tilesToFilter.length; i++) {
            const tile = tilesToFilter[i];
            const piece = this.getPieceByPosition(tile);
    
            if (piece === undefined) filteredTiles.push({ position: { q: tile.q, r: tile.r, s: tile.s }, type: 'possibleMove' });
    
            if (piece?.color !== PlayerController.color) filteredTiles.push({ position: { q: tile.q, r: tile.r, s: tile.s }, type: 'possibleAttack' });
        }
    
        return filteredTiles;
    };
}