import React from "react";
import { movies } from "../data";

const eachMovie = () => {
  return movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map(genre => {
            <li>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* {eachMovie()} */}
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>Movie: {movie.title}</h2>
          <h3>Run time: {movie.time}</h3>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
