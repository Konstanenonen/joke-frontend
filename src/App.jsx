/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Switch from './components/Switch';
import NewJokeForm from './components/NewJokeForm';
import Nav from './components/Nav';
import TagFilters from './components/TagFilters';
import FillerCards from './components/FillerCards';
import ThemeButton from './components/ThemeButton';

function App() {
  const [jokes, setJokes] = useState(null);
  const [fetchAmount, setFetchAmount] = useState(1);
  const [jokeId, setJokeId] = useState(null);
  const [category, setCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // For fetching all jokes from database
  useEffect(() => {
    fetch('https://joke-rest-api.herokuapp.com/api/getall')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setJokes(data));
  }, [fetchAmount]);

  // For fetching single joke with id from database
  useEffect(() => {
    if (jokeId === null) return;

    fetch(`https://joke-rest-api.herokuapp.com/api/get/${jokeId}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data === 'System failure') {
          setJokes({
            title: 'Nothing found',
            body: 'No joke matched the given id.',
            category: 'nothing found',
          });
        } else {
          setJokes(data);
        }
        setJokeId(null);
      });
  }, [jokeId]);

  function fetchNewJokes() {
    setFetchAmount((prevState) => prevState + 1);
  }

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
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  return (
    <div className="App">
      <Nav
        setJokeId={setJokeId}
        theme={styles}
        fetchNewJokes={() => fetchNewJokes()}
      />
      <div style={styles} className="form-area">
        <NewJokeForm fetchNewJokes={() => fetchNewJokes()} />
      </div>
      <main style={styles} className="joke-container">
        {jokes ? makeCards(category) : <FillerCards />}
      </main>
      <footer style={styles} className="footer">
        <ThemeButton setDarkMode={setDarkMode} darkMode={darkMode} />
        <TagFilters setCategory={setCategory} />
      </footer>
    </div>
  );
}

export default App;
