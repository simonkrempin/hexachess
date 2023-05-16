"use client";

import React from "react";
import "./board.css";

import { HexGrid, Hexagon, Layout } from "react-hexgrid";
import { useBoard } from "@hooks/useBoard";

const BOARD_SIZE = 5;

export const Hexagons = (): React.ReactElement => {
    let hexagons: React.ReactElement[] = [];

    for (let q = -BOARD_SIZE; q <= BOARD_SIZE; q++) {
        for (let s = -BOARD_SIZE; s <= BOARD_SIZE; s++) {
            for (let r = -BOARD_SIZE; r <= BOARD_SIZE; r++) {
                // mask out invalid tiles
                if (q + r + s !== 0) {
                    continue;
                }

                // const tileMark = getMarkTypeOfTile({ q, r, s }, props.highlightTiles);
                const tileMark = "none";
                hexagons.push(
                    <Hexagon
                        q={q}
                        r={r}
                        s={s}
                        key={`${q}${r}${s}`}
                        className="tile"
                        // onClick={props.onTileClicked}
                    />
                );
            }
        }
    }

    return (
        <Layout size={{ x: BOARD_SIZE, y: BOARD_SIZE }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
            {hexagons}
        </Layout>
    );
};

const Board = () => {
    const { state, dispatch } = useBoard();

    return (
        <div className="game-board">
            <HexGrid
                style={{
                    width: "100%",
                    height: "100vh"
                }}
            >
                <Hexagons />
            </HexGrid>
        </div>
    );
};

export default Board;
