"use client";

import React, { ReactElement } from "react";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import "../styles/board.css";
import { IBoardProps, PieceBoardProps, HexPosition, HexTile, TileType } from "../interfaces/hexachess";
import { highlightTilesContains } from "../utils/hexachess";
import { Piece } from "./pieces/piece";

export const testId = "board";

export const CreateHexagons = (props: {
    boardSize: number;
    highlightTiles: HexTile[];
    setSelectedPiece: (piece: Piece | null) => void;
    selectedPiece: Piece | null;
    pieces: Piece[];
    onTileClicked: (event: any, source: any) => void;
}): ReactElement[] => {
    let res: ReactElement[] = [];

    for (let q = -props.boardSize; q <= props.boardSize; q++) {
        for (let s = -props.boardSize; s <= props.boardSize; s++) {
            for (let r = -props.boardSize; r <= props.boardSize; r++) {
                if (q + r + s !== 0) continue;

                const tileMark = highlightTilesContains({ q, r, s }, props.highlightTiles);
                res.push(
                    <Hexagon
                        q={q}
                        r={r}
                        s={s}
                        key={`${q}${r}${s}`}
                        className={`tile-${tileMark}`}
                        onClick={props.onTileClicked}
                    />
                );
            }
        }
    }

    return res;
};

export function Board(props: IBoardProps) {
    return (
        <div
            data-testid="board"
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
            }}
        >
            <HexGrid
                style={{
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                }}
            >
                <Layout size={{ x: 5, y: 5 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
                    {CreateHexagons({
                        boardSize: props.boardSize ?? 5,
                        highlightTiles: props.highlightTiles ?? [],
                        setSelectedPiece: props.setSelectedPiece,
                        selectedPiece: props.selectedPiece,
                        pieces: props.pieces,
                        onTileClicked: props.onTileClicked,
                    })}
                </Layout>
            </HexGrid>
        </div>
    );
}

export function Pieces(props: PieceBoardProps) {
    const DisplayPieces = (): ReactElement[] => {
        return props.pieces.map((piece, index) => {
            return (
                <Hexagon
                    q={piece.position.q}
                    r={piece.position.r}
                    s={piece.position.s}
                    key={index}
                    fill={`${typeof piece}-${piece.color}`}
                    className="piece"
                    id={piece.color !== props.player.color ? "opponent" : "player"}
                    data={piece}
                    onClick={props.onPieceClicked}
                />
            );
        });
    };

    return (
        <div
            data-testid="figures"
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                pointerEvents: "none",
            }}
        >
            <HexGrid
                style={{
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                <Layout size={{ x: 5, y: 5 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }} className="board">
                    <>{DisplayPieces()}</>
                    <Pattern
                        id="king-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="queen-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="rook-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="bishop-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="knight-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="pawn-black"
                        link="https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="king-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="queen-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="rook-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="bishop-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="knight-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                    <Pattern
                        id="pawn-white"
                        link="https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
                        size={{ x: 5, y: 5 }}
                    />
                </Layout>
            </HexGrid>
        </div>
    );
}
