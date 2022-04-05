import React, { useState } from "react";
import EventSummary from './eventSummary';
import data from './mocks/data.json';

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
        
        setEvents(data);
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

    const GetData = () => {
    fetch(`http://localhost:8080/events?keyword=music&postalCode=30303`)
   .then(data => data.json())
    .then(response => {
     console.log(response)
  });
 
    }

  

    
        
  
    export default EventSearch;
