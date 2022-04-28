/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function Nav(props) {
  const { setJokeId, theme } = props;
  const [searchId, setSearchId] = useState('');

  function searchById(event) {
    event.preventDefault();

    setJokeId(searchId);
    setSearchId('');
  }

  return (
    <nav style={theme} className="nav">
      <h1>Joke App</h1>
      <form className="search-form" onSubmit={searchById}>
        <label htmlFor="id-search">Search by id</label>
        <input
          onChange={(event) => setSearchId(event.target.value)}
          value={searchId}
          type="search"
          id="id-search"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Nav;
