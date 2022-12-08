"use client";

import React from "react";
import { HexTile, pieceTypes, Player } from "../interfaces/hexachess";
import { directionalMove, filterBlockedTiles } from "../utils/hexachess";
import { Board, Pieces } from "./board";

import { King } from "./pieces/king";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Knight } from "./pieces/knights";
import { Bishop } from "./pieces/bishop";
import { Piece } from "./pieces/piece";

export const boardSize = 5;

export const pieces: Piece[] = [
    new King("black", { q: 1, r: 4, s: -5 }),
    new Queen("black", { q: -1, r: 5, s: -4 }),
    new Rook("black", { q: 3, r: 2, s: -5 }),
    new Rook("black", { q: -3, r: 5, s: -2 }),
    new Bishop("black", { q: 0, r: 5, s: -5 }),
    new Bishop("black", { q: 0, r: 4, s: -4 }),
    new Bishop("black", { q: 0, r: 3, s: -3 }),
    new Knight("black", { q: 2, r: 3, s: -5 }),
    new Knight("black", { q: -2, r: 5, s: -3 }),
    new Pawn("black", { q: 4, r: 1, s: -5 }),
    new Pawn("black", { q: 3, r: 1, s: -4 }),
    new Pawn("black", { q: 2, r: 1, s: -3 }),
    new Pawn("black", { q: 1, r: 1, s: -2 }),
    new Pawn("black", { q: 0, r: 1, s: -1 }),
    new Pawn("black", { q: -1, r: 2, s: -1 }),
    new Pawn("black", { q: -2, r: 3, s: -1 }),
    new Pawn("black", { q: -3, r: 4, s: -1 }),
    new Pawn("black", { q: -4, r: 5, s: -1 }),

    new King("white", { q: -1, r: -4, s: 5 }),
    new Queen("white", { q: 1, r: -5, s: 4 }),
    new Rook("white", { q: 3, r: -5, s: 2 }),
    new Rook("white", { q: -3, r: -2, s: 5 }),
    new Bishop("white", { q: 0, r: -5, s: 5 }),
    new Bishop("white", { q: 0, r: -4, s: 4 }),
    new Bishop("white", { q: 0, r: -3, s: 3 }),
    new Knight("white", { q: -2, r: -3, s: 5 }),
    new Knight("white", { q: 2, r: -5, s: 3 }),
    new Pawn("white", { q: -4, r: -1, s: 5 }),
    new Pawn("white", { q: -3, r: -1, s: 4 }),
    new Pawn("white", { q: -2, r: -1, s: 3 }),
    new Pawn("white", { q: -1, r: -1, s: 2 }),
    new Pawn("white", { q: 0, r: -1, s: 1 }),
    new Pawn("white", { q: 1, r: -2, s: 1 }),
    new Pawn("white", { q: 2, r: -3, s: 1 }),
    new Pawn("white", { q: 3, r: -4, s: 1 }),
    new Pawn("white", { q: 4, r: -5, s: 1 }),
];

const player: Player = {
    name: "Player",
    color: "black",
};

export const GameEngine = () => {
    const [selectedPiece, setSelectedPiece] = React.useState<Piece | null>(null);

    const onPieceClicked = (event: any, source: any) => {
        setSelectedPiece(source.props.piece);
    };

    const onTileClicked = (event: any, source: any) => {
        if (!selectedPiece) return;

        if (source.props.className === "tile-possibleAttack") {
            // find the opponent piece and remove it from the board
            const enemyPiece = pieces.find(
                (piece) =>
                    piece.position.q === source.props.q &&
                    piece.position.r === source.props.r &&
                    piece.position.s === source.props.s
            );
            if (enemyPiece) pieces.splice(pieces.indexOf(enemyPiece), 1);
            selectedPiece.position = { q: source.props.q, r: source.props.r, s: source.props.s };
        }

        if (source.props.className !== "tile")
            selectedPiece.position = { q: source.props.q, r: source.props.r, s: source.props.s };

        setSelectedPiece(null);
    };

    return (
        <div>
            <Board
                highlightTiles={selectedPiece?.moves ?? []}
                setSelectedPiece={setSelectedPiece}
                selectedPiece={selectedPiece}
                pieces={pieces}
                onTileClicked={onTileClicked}
            />
            <Pieces pieces={pieces} onPieceClicked={onPieceClicked} player={player} />
        </div>
    );
};
