"use client";

import React from "react";
import { Player } from "../interfaces/hexachess";
import { Board, Pieces } from "./board";
import { PieceController } from "./piece-controller";
import { Piece } from "./pieces/piece";

export const boardSize = 5;

const player: Player = {
    name: "Player",
    color: "black",
};

export const GameEngine = () => {
    const [selectedPiece, setSelectedPiece] = React.useState<Piece | null>(null);

    const onPieceClicked = (event: any, source: any) => {
        setSelectedPiece(source.props.data);
    };

    const onTileClicked = (event: any, source: any) => {
        if (!selectedPiece) return;

        if (source.props.className === "tile-possibleAttack") {
            PieceController.removePieceByPosition({ q: source.props.q, r: source.props.r, s: source.props.s });
        }

        if (source.props.className !== "tile-none")
            selectedPiece.position = { q: source.props.q, r: source.props.r, s: source.props.s };

        setSelectedPiece(null);
    };

    return (
        <div>
            <Board
                highlightTiles={selectedPiece?.moves ?? []}
                setSelectedPiece={setSelectedPiece}
                selectedPiece={selectedPiece}
                pieces={PieceController.pieces}
                onTileClicked={onTileClicked}
            />
            <Pieces pieces={PieceController.pieces} onPieceClicked={onPieceClicked} player={player} />
        </div>
    );
};
