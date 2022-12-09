import { HexPosition, HexTile } from "../../interfaces/hexachess";
import { PieceController } from "../piece-controller";
import { Piece } from "./piece";

export class King extends Piece {
    public get moves(): HexTile[] {
        return PieceController.filterBlockedTiles(
            [
                {
                    q: this.position.q + 1,
                    r: this.position.r - 1,
                    s: this.position.s,
                },
                {
                    q: this.position.q + 1,
                    r: this.position.r,
                    s: this.position.s - 1,
                },
                {
                    q: this.position.q,
                    r: this.position.r - 1,
                    s: this.position.s + 1,
                },
                {
                    q: this.position.q,
                    r: this.position.r + 1,
                    s: this.position.s - 1,
                },
                {
                    q: this.position.q - 1,
                    r: this.position.r,
                    s: this.position.s + 1,
                },
                {
                    q: this.position.q - 1,
                    r: this.position.r + 1,
                    s: this.position.s,
                },
            ],
        );
    }
}