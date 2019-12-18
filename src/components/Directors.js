import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectorList = () => {
    return directors.map(director => {
      return <div className="actor"> {director.name}: {director.movies} </div>
    })
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectorList()}
    </div>
  );
}

export default Directors
