import { loginWithGoogle } from "@/firebase/firebase-config";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class UserStore {
	user = null;

	constructor() {
		makeAutoObservable(this);
		this.getUserFromLocalStorage();
	}

	login = async () => {
		const user = await loginWithGoogle();
		if (!user) {
			// TODO: Handle login error
		}
		this.user = user;
		this.updateUserInLocalStorage();
	};

	updateUserInLocalStorage = () => {
		localStorage.setItem("user", JSON.stringify(this.user));
	};

	getUserFromLocalStorage = () => {
		const authUser = localStorage.getItem("user");
		if (authUser) {
			this.user = JSON.parse(authUser);
		}
	};
}

export const userStore = new UserStore();
export default createContext(userStore);
