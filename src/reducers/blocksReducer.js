import {
    BLOCKS_DATA,
    BLOCKS_UPDATE_DATA
} from "../constants";

const INITIAL_DATA = {
    blocks: [],
};

export const blocksReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case BLOCKS_DATA: {
            return {
                ...state,
                blocks: [...action.payload]
            };
        }
        case BLOCKS_UPDATE_DATA: {
            return {
                ...state,
                blocks: [...action.payload]
            };
        }
        default: {
            return state;
        }
    }
}