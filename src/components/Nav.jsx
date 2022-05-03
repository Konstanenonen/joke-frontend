/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Context';

function Nav(props) {
  const { setJokeId, fetchNewJokes } = props;
  const [searchId, setSearchId] = useState('');
  const darkMode = useContext(ThemeContext);

  function searchById(event) {
    event.preventDefault();

    setJokeId(searchId);
    setSearchId('');
  }

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  return (
    <nav style={styles} className="nav">
      <h1 onClick={fetchNewJokes}>Joke App</h1>
      <form className="search-form" onSubmit={searchById}>
        <label htmlFor="id-search">Search by id</label>
        <input
          onChange={(event) => setSearchId(event.target.value)}
          value={searchId}
          type="search"
          id="id-search"
          required
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Nav;
