import { SET_SELECTED_EVENT } from '../actionTypes';

const initialState = {};

function selectedEventReducer(state=initialState, action) {
  if (action.type === SET_SELECTED_EVENT) {
    return action.payload;
  }
  return state;
}

export default selectedEventReducer;