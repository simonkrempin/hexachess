"use client";

import React from "react";

import { BoardAction, BoardState, PlayerTypes, type BoardContext as IBoardContext } from "@interfaces/hexachess";

const BoardContext = React.createContext<IBoardContext | null>(null);

interface BoardProviderProps {
    children: React.ReactNode;
}

const boardReducer = (state: BoardState, action: BoardAction) => {
    return { ...state, ...action };
};

const BoardContextProvider = ({ children }: BoardProviderProps): React.ReactElement => {
    const initialBoardState: BoardState = {
        selectedPiece: null,
        currentPlayer: PlayerTypes.white,
        highlightedTiles: [],
    };

    const [state, dispatch] = React.useReducer(boardReducer, initialBoardState);

    return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
};

export { BoardContextProvider, BoardContext };
