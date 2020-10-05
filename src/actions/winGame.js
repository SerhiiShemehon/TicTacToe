import { WIN_DATA } from "../constants";

const winData = (payload) => ({
    type: WIN_DATA,
    payload
});

export const winGame = (data) => {
    return (dispatch) => {
        dispatch(winData(data));
    };
}