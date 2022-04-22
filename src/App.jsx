/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Switch from './components/Switch';

function App() {
  const [jokes, setJokes] = useState(null);
  const [fetchAmount, setFetchAmount] = useState(1);

  useEffect(() => {
    fetch('https://joke-rest-api.herokuapp.com/api/getall')
      .then((response) => response.json())
      .then((data) => setJokes(data));
  }, [fetchAmount]);

  function makeCards() {
    return jokes.map((joke) => (
      <Switch
        id={joke._id}
        key={joke._id}
        title={joke.title}
        category={joke.category}
        body={joke.body}
        fetchNewJokes={() => setFetchAmount((prevState) => prevState + 1)}
      />
    ));
  }

  return (
    <div className="App">
      <h1>Joke App</h1>
      <div className="joke-container">
        {jokes && makeCards()}
      </div>
    </div>
  );
}

export default App;
