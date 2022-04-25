/* eslint-disable react/prop-types */
import React from 'react';

function TagFilters(props) {
  const { setCategory } = props;

  return (
    <div className="filter-container">
      <h2>Select Category</h2>
      <button onClick={() => setCategory(null)} type="button">All Jokes</button>
      <button onClick={() => setCategory('Dad Joke')} type="button">Dad Jokes</button>
      <button onClick={() => setCategory('Dark Humor')} type="button">Dark Humor</button>
    </div>
  );
}

export default TagFilters;
