import { SET_SEARCH_RESULTS } from '../actionTypes';

const initialState = [];

function searchResultsReducer(state=initialState, action) {
  if (action.type === SET_SEARCH_RESULTS) {
    return action.payload;
  }
  return state;
}

export default searchResultsReducer;