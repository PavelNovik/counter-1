import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducer";

export const appRootReducer = combineReducers({
    state: counterReducer
})

export type AppRootState = ReturnType<typeof appRootReducer>

export const store = legacy_createStore(appRootReducer)

// @ts-ignore
window.store = store
