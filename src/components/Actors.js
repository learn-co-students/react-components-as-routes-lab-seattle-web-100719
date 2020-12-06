import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {mapActors()}
    </div>
  );
};

const mapActors=()=> {
  return actors.map(actor => <div><h3>Name: {actor.name} </h3> Movies: <ul>{mapMovies(actor.movies)}</ul></div>)
}

const mapMovies=(movies)=>{
return movies.map(movie => <li>{movie}</li> )
}

export default Actors;
