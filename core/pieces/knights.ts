import { HexTile } from "../../interfaces/hexachess";
import { PieceController } from "../piece-controller";
import { Piece } from "./piece";

export class Knight extends Piece {
    public get moves(): HexTile[] {
        return PieceController.filterBlockedTiles(
            [
                {
                    q: this.position.q + 2,
                    r: this.position.r - 3,
                    s: this.position.s + 1,
                },
                {
                    q: this.position.q + 3,
                    r: this.position.r - 2,
                    s: this.position.s - 1,
                },
                {
                    q: this.position.q + 3,
                    r: this.position.r - 1,
                    s: this.position.s - 2,
                },
                {
                    q: this.position.q + 2,
                    r: this.position.r + 1,
                    s: this.position.s - 3,
                },
                {
                    q: this.position.q + 1,
                    r: this.position.r + 2,
                    s: this.position.s - 3,
                },
                {
                    q: this.position.q - 1,
                    r: this.position.r + 3,
                    s: this.position.s - 2,
                },
                {
                    q: this.position.q - 2,
                    r: this.position.r + 3,
                    s: this.position.s - 1,
                },
                {
                    q: this.position.q - 3,
                    r: this.position.r + 2,
                    s: this.position.s + 1,
                },
                {
                    q: this.position.q - 3,
                    r: this.position.r + 1,
                    s: this.position.s + 2,
                },
                {
                    q: this.position.q - 2,
                    r: this.position.r - 1,
                    s: this.position.s + 3,
                },
                {
                    q: this.position.q - 1,
                    r: this.position.r - 2,
                    s: this.position.s + 3,
                },
                {
                    q: this.position.q + 1,
                    r: this.position.r - 3,
                    s: this.position.s + 2,
                },
            ],
        );
    }
}