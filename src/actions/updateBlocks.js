import { BLOCKS_UPDATE_DATA } from "../constants";

const updateData = (payload) => ({
    type: BLOCKS_UPDATE_DATA,
    payload
});

export const updateBlocks = (data) => {
    return (dispatch) => {
        dispatch(updateData(data));
    };
}