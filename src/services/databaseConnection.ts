import { MongoClient, Collection } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let _gameCollection: Collection<GameModel> | undefined = undefined;

export default async function gameCollection(): Promise<Collection<GameModel>> {
    if (_gameCollection) {
        return _gameCollection;
    }

    const mongoClient = new MongoClient(uri, options);
    const connection = await mongoClient.connect();
    const db = connection.db("hexachess");

    if (!db) {
        throw new Error('Could not connect to database');
    }

    return _gameCollection = db.collection('game');
}
