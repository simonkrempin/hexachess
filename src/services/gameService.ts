import dbConnection from './databaseConnection';

export async function getGame(gameId: string) {
    const collection = await dbConnection();
    collection.findOne({ _id: gameId })
}

export async function createGame() {
    const collection = await dbConnection();
    collection.insertOne({
        playerToMove: "white",
        white: "player1",
        black: "player2",
        pieces: {},
    });
}