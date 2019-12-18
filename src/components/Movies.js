import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      return (
      <div>
        {movie.title}
        {movie.time}
        <ul>{movie.genres}</ul>
      </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
