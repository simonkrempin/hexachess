export interface GameState {
    session: string | null;
}

export interface GameStateDispatch {
    setSession: (session: string) => void;
}