import { HexTile } from "../../interfaces/hexachess";
import { PieceController } from "../piece-controller";
import { Piece } from "./piece";

export class Pawn extends Piece {
    public get moves(): HexTile[] {
        return PieceController.filterBlockedTiles(
            [
                {
                    q: this.position.q,
                    r: this.position.r + (this.color === "white" ? 1 : -1),
                    s: this.position.s + (this.color === "white" ? -1 : 1),
                },
            ]
        );
    }
}
