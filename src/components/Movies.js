import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovieList = () => {
    return movies.map(movie => {
      return <div className="actor"> {movie.title}: {movie.time} {movie.genres} {movie.metaScore} </div>
    })
  }
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovieList()}
    </div>
  );
};

export default Movies;
