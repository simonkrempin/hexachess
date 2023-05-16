import { HexPosition, HexTile } from "@interfaces/hexachess";


export class Piece {
    private _position: HexPosition;

    constructor(public color: "white" | "black", startPosition: HexPosition ) {
        this._position = startPosition;
    }

    public get position(): HexPosition {
        return this._position;
    }

    public set position(newPosition: HexPosition) {
        if (newPosition.q + newPosition.r + newPosition.s !== 0) {
            throw new Error("Invalid position");
        }

        this._position = newPosition;
    }

    public get moves(): HexTile[] {
        throw new Error("Method not implemented.");
    }
}
