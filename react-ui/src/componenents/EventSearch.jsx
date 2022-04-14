import React, { useState } from "react";
import EventSummary from './eventSummary';
import fetch from 'node-fetch';
//import data from './mocks/data.json';

const Data = () => {
  let [responseObj, setResponseObj] = useState({});

function getData(){
  fetch("http://localhost:8080/events?keyword=music&postalCode=30303", {
    "method": "GET",
    "headers": {}

  })
 .then(data => data.json())
  .then(response => {
   console.log(response)
});
}
  }


const EventSearch = () => {
   
 const [keyword, setKeyword] = useState('');
 const [postalCode, setPostalCode] = useState(''); 
   const [events, setEvents] = useState([]);

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
        
        setEvents(Data);
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => handleChange(e, 'keyword')} placeholder="keyword" value={keyword} />
          <input onChange={(e) => handleChange(e, 'postalCode')} placeholder="postal code" value={postalCode} />
          <button>Search</button>
        </form>
        <EventSummary events={events} />
      </>
    )
  };

    
          
  
    export default EventSearch;
