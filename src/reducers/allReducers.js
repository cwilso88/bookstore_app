import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";
import { booksDataReducer } from "./booksDataReducer";

combineReducers({
    globalState: appStateReducer,
    booksData: booksDataReducer
})