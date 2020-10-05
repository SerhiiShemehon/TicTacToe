import {
    WIN_DATA
} from "../constants";

const INITIAL_DATA = {
    userWin: false,
};

export const winGameReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case WIN_DATA: {
            return {
                ...state,
                userWin: action.payload
            };
        }
        default: {
            return state;
        }
    }
}