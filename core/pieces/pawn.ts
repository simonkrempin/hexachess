import { HexTile } from "../../interfaces/hexachess";
import { Piece } from "./piece";

export class Pawn extends Piece {
    public get moves(): HexTile[] {
        return [];
    }
}
