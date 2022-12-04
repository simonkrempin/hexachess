import { pieceTypes, HexPosition } from "../../interfaces/hexachess";

export class Piece {
    private _position: HexPosition;

    constructor(public color: "white" | "black", public type: pieceTypes, startPosition: HexPosition ) {
        this._position = startPosition;
    }

    public get position(): HexPosition {
        return this._position;
    }

    public set position(newPosition: HexPosition) {
        if (newPosition.q - newPosition.r - newPosition.s !== 0) {
            console.log("new position is not on the board");
            return;
        }

        this._position = newPosition;
    }

    public get moves(): HexPosition[] {
        throw new Error("Method not implemented.");
    }
}
