import { HexTile } from "../../interfaces/hexachess";
import { Piece } from "./piece";
import { PieceController } from "../piece-controller";

export class Bishop extends Piece {
    public get moves(): HexTile[] {
        return PieceController.diagonalMoves(this);
    }
}