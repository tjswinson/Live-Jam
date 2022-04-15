import {GET_USERNAME,
   SET_AUTH, 
  SET_SELECTED_EVENT,
  SET_SEARCH_RESULTS,
  SET_FAVORITES
} from './actionTypes';
import { } from './actionTypes';
//import mockData from '../mocks/data.json';


export const updateUsername = username => {
  return {
		
    type: GET_USERNAME,
    payload: {
        username
      }
    }
  };
  export const setAuth = () => {
    let isLoggedIn = false
    if (localStorage.getItem("jsonwebtoken")){
           isLoggedIn = true
       }
       return{
         type:SET_AUTH,
         payload:isLoggedIn
       }
  }





export const setSelectedEvent = event => {
  return {
      type:SET_SELECTED_EVENT,
      payload: event

  }
};

const fetchSuccess = data => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: data 
  }
};

export const setSearchResults = (keyword, postalCode) => dispatch => {
  // this is where you put your http request
  // note that this is a function that returns another function
  // which takes in `dispatch` as an argument
  // it needs this because this is asynchronous
  // when the promise resolves, you write the following
  // but with the data that is returned from the promise
 // dispatch(fetchSuccess(mockData));
}

export const setFavorite = event => {
  return {
    type: SET_FAVORITES,
    payload: event
  }
}

