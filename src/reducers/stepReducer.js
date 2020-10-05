import {
    UPDATE_STEP
} from "../constants";

const INITIAL_DATA = {
    step: 0,
};

export const stepReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case UPDATE_STEP: {
            return {
                ...state,
                step: action.payload
            };
        }
        default: {
            return state;
        }
    }
}