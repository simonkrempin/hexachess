import { GameState } from "@interfaces/game";
import { getSession } from "@services/sessionService";
import React from "react";

const gameReducer = (state: GameState, action: any): GameState => {
    return { ...state, ...action };
};

const initializeState = (): GameState => {
    const session = getSession();

    return {
        session,
    };
};

export const useGame = () => {
    const [state, dispatch] = React.useReducer(gameReducer, undefined, initializeState);

    const setSession = (session: string) => {
        dispatch({ session });
    };

    return { state, setSession };
};
