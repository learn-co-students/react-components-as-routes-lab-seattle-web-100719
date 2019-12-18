import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActorList = () => {
    return actors.map(actor => {
      return <div className="actor"> {actor.name}: {actor.movies} </div>
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActorList()}
    </div>
  );
};

export default Actors;
