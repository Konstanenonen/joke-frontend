/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Switch from './Switch';
import FillerCards from './FillerCards';
import { ThemeContext } from '../Context';

function MainArea(props) {
  const { jokes, category, fetchNewJokes } = props;
  const darkMode = useContext(ThemeContext);

  function makeCards() {
    if (Array.isArray(jokes)) {
      return jokes
        .filter((joke) => joke.category === category || category === null)
        .map((joke) => (
          <Switch
            id={joke._id}
            key={joke._id}
            title={joke.title}
            category={joke.category}
            body={joke.body}
            fetchNewJokes={() => fetchNewJokes()}
          />
        ));
    }
    return (
      <Switch
        id={jokes._id}
        key={jokes._id}
        title={jokes.title}
        category={jokes.category}
        body={jokes.body}
        fetchNewJokes={() => fetchNewJokes()}
      />
    );
  }

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#434454', borderColor: 'white', color: 'white' }
    : null;

  return (
    <main style={styles} className="joke-container">
      {jokes ? makeCards(category) : <FillerCards />}
    </main>
  );
}

export default MainArea;
