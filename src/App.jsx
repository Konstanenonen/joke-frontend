/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { FontContext, ThemeContext } from './Context';
import NewJokeForm from './components/NewJokeForm';
import Nav from './components/Nav';
import MainArea from './components/MainArea';
import Footer from './components/Footer';

function App() {
  const [jokes, setJokes] = useState(null);
  const [fetchAmount, setFetchAmount] = useState(1);
  const [jokeId, setJokeId] = useState(null);
  const [category, setCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [boringFont, setBoringFont] = useState(false);

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

  return (
    <ThemeContext.Provider value={darkMode}>
      <FontContext.Provider value={boringFont}>
        <div className="App">
          <Nav setJokeId={setJokeId} fetchNewJokes={() => fetchNewJokes()} />
          <NewJokeForm fetchNewJokes={() => fetchNewJokes()} />
          <MainArea
            jokes={jokes}
            category={category}
            fetchNewJokes={() => fetchNewJokes()}
          />
          <Footer
            setDarkMode={setDarkMode}
            setCategory={setCategory}
            setBoringFont={setBoringFont}
          />
        </div>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
