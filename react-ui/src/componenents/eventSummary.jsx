import React, { useState } from 'react';
import EventDetail from './eventDetail';

const EventSummary = ({events}) => {

  const [selectedEventDetail, setSelectedEventDetail] = useState();

  const handleClick = (e) => {
    const id = e.target.dataset.id;
    const event = events.find(x => x.id == id);
    setSelectedEventDetail(event);
  };

  const searchedEvents = events.map((event, index) => {
    return <li key={index} data-id={event.id} onClick={handleClick}>{event.event}</li>;
  });
  return (
    <>
      <ul className="events">{searchedEvents}</ul>
      {selectedEventDetail && <EventDetail event={selectedEventDetail} />}
    </>
  )
};

export default EventSummary;