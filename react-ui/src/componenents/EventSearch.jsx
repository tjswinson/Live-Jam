import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchResults } from '../redux/actions';
import EventSummary from './eventSummary';
import fetch from 'node-fetch';
//import data from './mocks/data.json';

//const Data = () => {
  //let [responseObj, setResponseObj] = useState({});

  const EventSearch = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
     
   const [keyword, setKeyword] = useState('');
   const [postalCode, setPostalCode] = useState(''); 
     const [events, setEvents] = useState([]);



const getData = () => {
  fetch(`http://localhost:8080/events?keyword=${keyword}&postalCode=${postalCode}`)
    
        .then(response => response.json())
        .then(data => setEvents(data._embedded.events))
          }



  


const handleChange = (e, type) => {
    const val = e.target.value;
    console.log(val)
    if (type === 'keyword') {
      setKeyword(val);
    }
    if (type ==='postalCode'){
      setPostalCode(val);
    }
  };

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:8080/events?keyword=${keyword}&postalCode=${postalCode}`)
    
        .then(response => response.json())
        .then(data => {
          dispatch(setSearchResults(data._embedded.events));
          navigateTo('/eventSummary');
        }) 

        
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => handleChange(e, 'keyword')} placeholder="keyword" value={keyword} />
          <input onChange={(e) => handleChange(e, 'postalCode')} placeholder="postal code" value={postalCode} />
          <button>Search</button>
        </form>
          </>
    )
}
  


          
  
    export default EventSearch;
