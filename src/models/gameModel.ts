interface GameModel {
    _id?: string;
    playerToMove: "white" | "black";
    white: string;
    black: string;
    pieces: any;
}