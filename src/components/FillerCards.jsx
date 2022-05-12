import React from 'react';
import JokeCard from './JokeCard';

// This component is shown before any jokes are returned
// from the db. This way user knows something is going to happen
function FillerCards() {
  return (
    <>
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
      <JokeCard title="Loading..." category="Loading..." body="Loading..." />
    </>
  );
}

export default FillerCards;
