import { combineReducers } from "redux";
import username from './username';
import auth from './auth'
import favorites from './favorites';
import searchResults from './searchResults';
import selectedEvent from './selectedEvent';






export default combineReducers({ username,auth,favorites, searchResults, selectedEvent});