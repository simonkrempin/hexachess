"use client";
import React from "react";
import { GameState, GameStateDispatch } from "@interfaces/game";
import { useGame } from "@hooks/useGame";

const initialState: GameState = {
    session: null,
};

const initialStateDispatch: GameStateDispatch = {
    setSession: (session: string) => {
        throw new Error("setSession() not implemented");
    },
};

const GameContext = React.createContext<GameState>(initialState);

const GameDispatchContext = React.createContext<GameStateDispatch>(initialStateDispatch);

interface GameContextProviderProps {
    children: React.ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps): React.ReactElement => {
    const { state, setSession } = useGame();

    return (
        <GameContext.Provider value={state}>
            <GameDispatchContext.Provider value={{ setSession }}>{children}</GameDispatchContext.Provider>
        </GameContext.Provider>
    );
};

export const useGameContext = (): GameState => {
    const context = React.useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGameContext must be used within a GameContextProvider");
    }
    return context;
};

export const useGameDispatchContext = (): GameStateDispatch => {
    const context = React.useContext(GameDispatchContext);
    if (context === undefined) {
        throw new Error("useGameDispatchContext must be used within a GameContextProvider");
    }
    return context;
}
