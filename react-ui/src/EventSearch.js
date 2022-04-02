import { useState } from "react";

const EventSearch = () => {
   
        const [event, setEvent] = useState('');

const handleChange = e => {
    const target = e.target.value;
    setEvent(target);
  };

    const handleSubmit = e => {
        e.preventDefault();
         
    const ListEvent = () => {

    const [eventList, setEventList] = useState('');


   // const GetData = () => {
    //fetch(`http://localhost:8080/location/${event}`)
   // .then(data => data.json())
   // .then(response => {
   //   console.log(response)
 //  });
    
    }

  
};



    return (
        <>
<form onSubmit={handleSubmit}> 
  <div className="event">
    
    <input type="search" value={event} onChange={handleChange} name="event" className="form-control" placeholder="Search for artists, venues, and events" />
  </div>
  <button>Search</button>
  
</form> 
 
</>


)
    }


    export default EventSearch;
