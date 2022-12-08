import { HexTile } from "../../interfaces/hexachess";
import { diagonalMoves, straightMoves } from "../../utils/hexachess";
import { Piece } from "./piece";

export class Queen extends Piece {
    public get moves(): HexTile[] {
        return [
            ...diagonalMoves(this), ...straightMoves(this)
        ];
    }
}