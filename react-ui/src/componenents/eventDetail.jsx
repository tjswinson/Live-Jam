import React from 'react';

const EventDetail = ({event}) => {
  return (
    <>
      <p>Start Date: {event.startDate}</p>
      <p>End Date: {event.endDate}</p>
      <p>Cost: {event.cost}</p>
    </>
  )
};

export default EventDetail;