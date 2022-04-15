import React from 'react';
import { useSelector } from 'react-redux';
import EventSearch from '../componenents/EventSearch';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  const favoritesAsItems = favorites && favorites.map((favorite, index) => {
    return (
      <li key={index}>
        <h1>{favorite.event}</h1>
        <p>Start Date: {favorite.startDate}</p>
        <p>End Date: {favorite.endDate}</p>
        <p>Cost: {favorite.cost}</p>
      </li>
    );
  });

  return (
    <>
      <ul>
        {favoritesAsItems}
      </ul>
    </>
  )
};

export default Favorites;