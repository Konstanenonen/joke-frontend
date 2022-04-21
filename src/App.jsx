import React, { useEffect, useState } from 'react';
import JokeCard from './components/JokeCard';

function App() {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch('https://joke-rest-api.herokuapp.com/api/getall')
      .then(response => response.json())
      .then(data => setJokes(data));
  }, []);

  function makeCards() {
    return jokes.map((joke) => (
      <JokeCard
        id={joke._id}
        key={joke._id}
        title={joke.title}
        category={joke.category}
        body={joke.body}
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
