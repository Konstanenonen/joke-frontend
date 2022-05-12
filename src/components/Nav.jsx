/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { FontContext, ThemeContext } from '../Context';

function Nav(props) {
  const { setJokeId, fetchNewJokes } = props;
  const [searchId, setSearchId] = useState('');
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

  // Searches the specific joke from the db
  function searchById(event) {
    event.preventDefault();

    setJokeId(searchId);
    setSearchId('');
  }

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <nav style={{ ...styles, ...font }} className="nav">
      <h1 onClick={fetchNewJokes}>Joke App</h1>
      <form className="search-form" onSubmit={searchById}>
        <label className="hide" htmlFor="id-search">Search by id</label>
        <input
          onChange={(event) => setSearchId(event.target.value)}
          value={searchId}
          type="search"
          id="id-search"
          style={font}
          required
        />
        <button style={font} type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Nav;
