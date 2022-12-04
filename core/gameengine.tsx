'use client';

import React from 'react';
import { IHexaChessPiece, IHexaChessTile, pieceTypes, IPlayer } from '../interfaces/hexachess';
import { directionalMove, filterBlockedTiles } from '../utils/hexachess';
import { Board, Pieces } from './board';

export const boardSize = 5;

export const pieces: IHexaChessPiece[] = [
    { type: "king", color: "black", position: { q: 1, r: 4, s: -5 } },
    { type: "queen", color: "black", position: { q: -1, r: 5, s: -4 } },
    { type: "rook", color: "black", position: { q: 3, r: 2, s: -5 } },
    { type: "rook", color: "black", position: { q: -3, r: 5, s: -2 } },
    { type: "bishop", color: "black", position: { q: 0, r: 5, s: -5 } },
    { type: "bishop", color: "black", position: { q: 0, r: 4, s: -4 } },
    { type: "bishop", color: "black", position: { q: 0, r: 3, s: -3 } },
    { type: "knight", color: "black", position: { q: -2, r: 5, s: -3 } },
    { type: "knight", color: "black", position: { q: 2, r: 3, s: -5 } },
    { type: "pawn", color: "black", position: { q: -4, r: 5, s: -1 } },
    { type: "pawn", color: "black", position: { q: -3, r: 4, s: -1 } },
    { type: "pawn", color: "black", position: { q: -2, r: 3, s: -1 } },
    { type: "pawn", color: "black", position: { q: -1, r: 2, s: -1 } },
    { type: "pawn", color: "black", position: { q: 0, r: 1, s: -1 } },
    { type: "pawn", color: "black", position: { q: 1, r: 1, s: -2 } },
    { type: "pawn", color: "black", position: { q: 2, r: 1, s: -3 } },
    { type: "pawn", color: "black", position: { q: 3, r: 1, s: -4 } },
    { type: "pawn", color: "black", position: { q: 4, r: 1, s: -5 } },

    { type: "king", color: "white", position: { q: -1, r: -4, s: 5 } },
    { type: "queen", color: "white", position: { q: 1, r: -5, s: 4 } },
    { type: "rook", color: "white", position: { q: 3, r: -5, s: 2 } },
    { type: "rook", color: "white", position: { q: -3, r: -2, s: 5 } },
    { type: "bishop", color: "white", position: { q: 0, r: -5, s: 5 } },
    { type: "bishop", color: "white", position: { q: 0, r: -4, s: 4 } },
    { type: "bishop", color: "white", position: { q: 0, r: -3, s: 3 } },
    { type: "knight", color: "white", position: { q: -2, r: -3, s: 5 } },
    { type: "knight", color: "white", position: { q: 2, r: -5, s: 3 } },
    { type: "pawn", color: "white", position: { q: -4, r: -1, s: 5 } },
    { type: "pawn", color: "white", position: { q: -3, r: -1, s: 4 } },
    { type: "pawn", color: "white", position: { q: -2, r: -1, s: 3 } },
    { type: "pawn", color: "white", position: { q: -1, r: -1, s: 2 } },
    { type: "pawn", color: "white", position: { q: 0, r: -1, s: 1 } },
    { type: "pawn", color: "white", position: { q: 1, r: -2, s: 1 } },
    { type: "pawn", color: "white", position: { q: 2, r: -3, s: 1 } },
    { type: "pawn", color: "white", position: { q: 3, r: -4, s: 1 } },
    { type: "pawn", color: "white", position: { q: 4, r: -5, s: 1 } },
];

function getMovableTiles(figure: IHexaChessPiece | null): IHexaChessTile[] | undefined {
    const diagonalMoves = (figure: IHexaChessPiece) => [
        ...directionalMove(figure, { q: 1, r: -2, s: 1 }),
        ...directionalMove(figure, { q: 2, r: -1, s: -1 }),
        ...directionalMove(figure, { q: 1, r: -2, s: 1 }),
        ...directionalMove(figure, { q: -1, r: -1, s: 2 }),
        ...directionalMove(figure, { q: -2, r: 1, s: 1 }),
        ...directionalMove(figure, { q: -1, r: -1, s: 2 }),
    ];

    const straightMoves = (figure: IHexaChessPiece) => [
        ...directionalMove(figure, { q: 1, r: -1, s: 0 }),
        ...directionalMove(figure, { q: 0, r: -1, s: 1 }),
        ...directionalMove(figure, { q: -1, r: 0, s: 1 }),
        ...directionalMove(figure, { q: -1, r: 1, s: 0 }),
        ...directionalMove(figure, { q: 0, r: 1, s: -1 }),
        ...directionalMove(figure, { q: 1, r: 0, s: -1 }),
    ];

    if (!figure) return undefined;

    const possibleMoves: Record<pieceTypes, IHexaChessTile[]> = {
        king: filterBlockedTiles(
            //TODO: This can be made inside a for loop
            [
                {
                    q: figure.position.q,
                    r: figure.position.r - 1,
                    s: figure.position.s + 1,
                },
                {
                    q: figure.position.q + 1,
                    r: figure.position.r - 1,
                    s: figure.position.s,
                },
                {
                    q: figure.position.q + 1,
                    r: figure.position.r,
                    s: figure.position.s - 1,
                },
                {
                    q: figure.position.q,
                    r: figure.position.r + 1,
                    s: figure.position.s - 1,
                },
                {
                    q: figure.position.q - 1,
                    r: figure.position.r,
                    s: figure.position.s + 1,
                },
                {
                    q: figure.position.q - 1,
                    r: figure.position.r + 1,
                    s: figure.position.s,
                },
            ],
            pieces
        ),
        bishop: diagonalMoves(figure),
        rook: straightMoves(figure),
        knight: filterBlockedTiles(
            [
                {
                    q: figure.position.q + 2,
                    r: figure.position.r - 3,
                    s: figure.position.s + 1,
                },
                {
                    q: figure.position.q + 3,
                    r: figure.position.r - 2,
                    s: figure.position.s - 1,
                },
                {
                    q: figure.position.q + 3,
                    r: figure.position.r - 1,
                    s: figure.position.s - 2,
                },
                {
                    q: figure.position.q + 2,
                    r: figure.position.r + 1,
                    s: figure.position.s - 3,
                },
                {
                    q: figure.position.q + 1,
                    r: figure.position.r + 2,
                    s: figure.position.s - 3,
                },
                {
                    q: figure.position.q - 1,
                    r: figure.position.r + 3,
                    s: figure.position.s - 2,
                },
                {
                    q: figure.position.q - 2,
                    r: figure.position.r + 3,
                    s: figure.position.s - 1,
                },
                {
                    q: figure.position.q - 3,
                    r: figure.position.r + 2,
                    s: figure.position.s + 1,
                },
                {
                    q: figure.position.q - 3,
                    r: figure.position.r + 1,
                    s: figure.position.s + 2,
                },
                {
                    q: figure.position.q - 2,
                    r: figure.position.r - 1,
                    s: figure.position.s + 3,
                },
                {
                    q: figure.position.q - 1,
                    r: figure.position.r - 2,
                    s: figure.position.s + 3,
                },
                {
                    q: figure.position.q + 1,
                    r: figure.position.r - 3,
                    s: figure.position.s + 2,
                },
            ],
            pieces
        ),
        pawn: filterBlockedTiles(
            [
                {
                    q: figure.position.q,
                    r: figure.position.r + (figure.color === 'white' ? 1 : -1),
                    s: figure.position.s + (figure.color === 'white' ? -1 : 1),
                },
            ],
            pieces
        ),
        queen: [...diagonalMoves(figure), ...straightMoves(figure)],
    };

    return possibleMoves[figure.type];
};

const player: IPlayer = {
    name: "Player",
    color: "black",
};

export function GameEngine() {
    const [selectedPiece, setSelectedPiece] = React.useState<IHexaChessPiece | null>(null);

    return (
        <div>
            <Board
                highlightTiles={getMovableTiles(selectedPiece)}
                setSelectedPiece={setSelectedPiece}
                selectedPiece={selectedPiece}
                pieces={pieces}
            />
            <Pieces figures={pieces} onFigureClick={setSelectedPiece} player={player} />
        </div>
    );
}