import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class AppStore {
    constructor() {
        makeAutoObservable(this)
    }
}

export const appStore = new AppStore();
export default createContext(appStore);