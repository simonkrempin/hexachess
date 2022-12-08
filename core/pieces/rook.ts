import { HexTile } from "../../interfaces/hexachess";
import { directionalMove } from "../../utils/hexachess";
import { Piece } from "./piece";

export class Rook extends Piece {
    public get moves(): HexTile[] {
        return [
            ...directionalMove(this, { q: 1, r: -1, s: 0 }),
            ...directionalMove(this, { q: 1, r: 0, s: -1 }),
            ...directionalMove(this, { q: 0, r: -1, s: 1 }),
            ...directionalMove(this, { q: 0, r: 1, s: -1 }),
            ...directionalMove(this, { q: -1, r: 0, s: 1 }),
            ...directionalMove(this, { q: -1, r: 1, s: 0 }),
        ];
    }
}