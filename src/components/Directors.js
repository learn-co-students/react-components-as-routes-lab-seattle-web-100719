import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {mapDirectors()}
    </div>
  );
}
const mapDirectors=()=> {
  return directors.map(director => <div><h3>Name: {director.name} </h3> Movies: <ul>{mapMovies(director.movies)}</ul></div>)
}

const mapMovies=(movies)=>{
return movies.map(movie => <li>{movie}</li> )
}

export default Directors
