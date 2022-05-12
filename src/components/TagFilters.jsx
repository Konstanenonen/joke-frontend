/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { FontContext } from '../Context';

function TagFilters(props) {
  const { setCategory } = props;
  const [activeFilter, setActiveFilter] = useState(null);
  const boringFont = useContext(FontContext);

  // sets which category of jokes is shown on the app
  function handleClick(category) {
    setCategory(category);
    setActiveFilter(category);
  }

  const styles = {
    color: 'white',
    backgroundColor: 'green',
    border: '1px solid black',
  };

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <div style={font} className="filter-container">
      <h2>Select Category</h2>
      <div className="button-container">
        <button
          onClick={() => handleClick(null)}
          type="button"
          style={activeFilter === null ? { ...styles, ...font } : font}
        >
          All Jokes
        </button>
        <button
          onClick={() => handleClick('Dad Joke')}
          type="button"
          style={activeFilter === 'Dad Joke' ? { ...styles, ...font } : font}
        >
          Dad Jokes
        </button>
        <button
          onClick={() => handleClick('Dark Humor')}
          type="button"
          style={activeFilter === 'Dark Humor' ? { ...styles, ...font } : font}
        >
          Dark Humor
        </button>
        <button
          onClick={() => handleClick('Knock-Knock Joke')}
          type="button"
          style={activeFilter === 'Knock-Knock Joke' ? { ...styles, ...font } : font}
        >
          Knock-Knock Jokes
        </button>
      </div>
    </div>
  );
}

export default TagFilters;
