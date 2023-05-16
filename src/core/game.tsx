"use client";

import React from "react";

import { BoardContextProvider } from "@contexts/BoardContext";
import { Board } from "@components";

const Game = () => {
    return (
        <div className="center-content">
            <BoardContextProvider>
                <Board />
            </BoardContextProvider>
        </div>
    );
};

export default Game;
