import { SET_AUTH } from '../actionTypes';

const initialState = false;

function authReducer(state=initialState, action) {
    console.log(action)
    if (action.type === SET_AUTH) {
        console.log(action.payload)
        return action.payload;
    }
    return state;
}

export default authReducer;