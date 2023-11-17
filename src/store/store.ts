import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducer";

export const rootReducer = combineReducers({
    state: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store
