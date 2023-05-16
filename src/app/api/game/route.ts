// import { getGame, createGame } from "@services/gameService";

// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");

//     if (!id) {
//         return await createGame();
//     }
//     return await getGame(id);
// }

export async function GET(request: Request) {
    return new Response("Hello world!");
}