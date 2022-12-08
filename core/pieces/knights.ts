import { HexTile } from "../../interfaces/hexachess";
import { Piece } from "./piece";

export class Knight extends Piece {
    public get moves(): HexTile[] {
        return [];
    }
}