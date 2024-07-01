import { getAllDocs } from "./firebase-config";

async function getAllGames() {
	return getAllDocs("games");
}

export { getAllGames };
