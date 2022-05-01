/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TagFilters(props) {
  const { setCategory } = props;
  const [activeFilter, setActiveFilter] = useState(null);

  function handleClick(category) {
    setCategory(category);
    setActiveFilter(category);
  }

  const styles = {
    color: 'white',
    backgroundColor: 'green',
    border: '1px solid black',
  };

  return (
    <div className="filter-container">
      <h2>Select Category</h2>
      <div className="button-container">
        <button
          onClick={() => handleClick(null)}
          type="button"
          style={activeFilter === null ? styles : null}
        >
          All Jokes
        </button>
        <button
          onClick={() => handleClick('Dad Joke')}
          type="button"
          style={activeFilter === 'Dad Joke' ? styles : null}
        >
          Dad Jokes
        </button>
        <button
          onClick={() => handleClick('Dark Humor')}
          type="button"
          style={activeFilter === 'Dark Humor' ? styles : null}
        >
          Dark Humor
        </button>
        <button
          onClick={() => handleClick('Knock-Knock Joke')}
          type="button"
          style={activeFilter === 'Knock-Knock Joke' ? styles : null}
        >
          Knock-Knock Jokes
        </button>
      </div>
    </div>
  );
}

export default TagFilters;
