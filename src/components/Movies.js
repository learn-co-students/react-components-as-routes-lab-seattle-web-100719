import React from 'react';
import { movies } from '../data';



const Movies = () => {


  return (
    <div>
      <h1>Movies Page</h1>
        {mapMovies()}
    </div>
  );
};

const mapMovies=()=> {
    return movies.map(movie => <div><h3>Title: {movie.title} </h3><h5>Time: {movie.time}</h5> Genres: <ul>{mapMoviesGenres(movie.genres)}</ul></div>)
}

const mapMoviesGenres=(genres)=>{
  return genres.map(genre => <li>{genre}</li> )
}

export default Movies;
