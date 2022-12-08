import { HexTile } from "../../interfaces/hexachess";
import { PieceController } from "../piece-controller";
import { Piece } from "./piece";

export class Pawn extends Piece {
    public get moves(): HexTile[] {
        return [
            ...PieceController.filterBlockedTiles(
                [
                    {
                        q: this.position.q - 1,
                        r: this.position.r + (this.color === "white" ? 1 : 0),
                        s: this.position.s + (this.color === "white" ? 0 : 1),
                    },
                    {
                        q: this.position.q + 1,
                        r: this.position.r + (this.color === "white" ? 0 : -1),
                        s: this.position.s + (this.color === "white" ? -1 : 0),
                    }
                ]
            ).filter(tile => tile.type === "possibleAttack"),
            ...PieceController.filterBlockedTiles(
                [
                    {
                        q: this.position.q,
                        r: this.position.r + (this.color === "white" ? 1 : -1),
                        s: this.position.s + (this.color === "white" ? -1 : 1),
                    },
                ]
            ).filter(tile => tile.type === "possibleMove"),
        ];
    }
}
