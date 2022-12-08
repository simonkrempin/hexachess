import { HexTile } from "../../interfaces/hexachess";
import { Piece } from "./piece";

export class Bishop extends Piece {
    public get moves(): HexTile[] {
        return [];
    }
}