import React, { useState } from 'react';
import EventDetail from './eventDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { setSelectedEvent } from '../redux/actions';

const EventSummary = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const events = useSelector(state => state.searchResults);

 

  
  const handleClick = (e) => {
    const id = e.target.dataset.id;
    const event = events.find(x => x.id == id);
    dispatch(setSelectedEvent(event));
    navigateTo(`${id}`)
  };

  const searchedEvents = events && events.map((event, index) => {
    return (
      <li
        data-id={event.id}
        key={index}
        onClick={handleClick}
      >
        {event.name}
      </li>
    );
  });
  return (
    <>
      {searchedEvents && <ul className="events">{searchedEvents}</ul>}
      <Outlet />
    </>
  )
};


export default EventSummary;