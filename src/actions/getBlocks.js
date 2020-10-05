import { BLOCKS_DATA } from "../constants";
import {createGame} from 'service/createGame';

const getData = () => ({
    type: BLOCKS_DATA,
    payload: createGame()
});

export const getBlocks = () => {
    return (dispatch) => {
        dispatch(getData());
    };
}