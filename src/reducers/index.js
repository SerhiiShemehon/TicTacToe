import { combineReducers } from "redux";

import { blocksReducer } from "./blocksReducer";
import { winGameReducer } from "./winGameReducer";
import { stepReducer } from "./stepReducer";


export const rootReducer = combineReducers({
    blocksReducer,
    winGameReducer,
    stepReducer
});