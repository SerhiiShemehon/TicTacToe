import { UPDATE_STEP } from "../constants";

const updateData = (payload) => ({
    type: UPDATE_STEP,
    payload
});

export const updateStep = (data) => {
    return (dispatch) => {
        dispatch(updateData(data));
    };
}