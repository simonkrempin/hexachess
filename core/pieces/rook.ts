import { HexTile } from "../../interfaces/hexachess";
import { PieceController } from "../piece-controller";
import { Piece } from "./piece";

export class Rook extends Piece {
    public get moves(): HexTile[] {
        return PieceController.straightMoves(this);
    }
}