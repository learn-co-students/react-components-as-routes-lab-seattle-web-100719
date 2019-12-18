import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = actors.map(actor => (
    <div>
      <h3>{actor.name}</h3>
      <ul>{actor.movies}</ul>
    </div>
  ))
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
