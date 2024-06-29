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
		localStorage.setItem("user", JSON.stringify(user));
		this.user = user;
	};

	getUserFromLocalStorage = () => {
		const authUser = localStorage.getItem("user");
		if (authUser) {
			this.user = JSON.parse(authUser);
		}
	}
}

export const userStore = new UserStore();
export default createContext(userStore);
