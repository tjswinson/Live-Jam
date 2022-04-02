import { GET_USERNAME, SET_AUTH } from './actionTypes';

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