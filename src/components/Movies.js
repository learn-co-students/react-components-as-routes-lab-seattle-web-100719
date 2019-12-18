import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map(movie => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <h4>Time: {movie.time}</h4>
        <ul>{movie.genres}</ul>
        <h4>Rating: {movie.rating}</h4>
      </div>
    )
  })

  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
