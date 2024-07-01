import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { getAllGames } from "@/firebase/firebase-app";

class AppStore {
	games = [];

	constructor() {
		makeAutoObservable(this);

		getAllGames().then((games) => {
			this.games = games;
		});
	}
}

export const appStore = new AppStore();
export default createContext(appStore);