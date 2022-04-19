import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../redux/actions';


const EventDetail = () => {
  const dispatch = useDispatch();
  const event = useSelector(state => state.selectedEvent);

  const handleClick = () => {
    dispatch(setFavorite(event));
  };

  return (
    <>
    <h1>{event.name}</h1>
          <p>Start Date: {event.localDate}</p>
      <p>End Date: {event.endDate}</p>
            <p>Cost: {event.priceRanges}</p>
            <button onClick={handleClick}>Add to Favorites</button>
    </>
  )
};

export default EventDetail;