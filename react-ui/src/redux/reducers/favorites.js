
import { SET_FAVORITES } from '../actionTypes';

const initialState = [];

function favoritesReducer(state=initialState, action) {
  if (action.type === SET_FAVORITES) {
    return [...state, action.payload];
  }
  return state;
}

export default favoritesReducer;
