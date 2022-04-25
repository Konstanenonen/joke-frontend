/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function Nav(props) {
  const { setJokeId } = props;
  const [searchId, setSearchId] = useState('');

  function searchById(event) {
    event.preventDefault();

    setJokeId(searchId);
    setSearchId('');
  }

  return (
    <nav className="nav">
      <form onSubmit={searchById}>
        <label htmlFor="id-search">Search by id</label>
        <input
          onChange={(event) => setSearchId(event.target.value)}
          value={searchId}
          type="search"
          id="id-search"
        />
        <button type="submit">Search</button>
      </form>
      <h1>Joke App</h1>
    </nav>
  );
}

export default Nav;
