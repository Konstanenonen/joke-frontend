import React from 'react';

function JokeCard(props) {
  const { id, title, category, body } = props;

  return (
    <div id={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{category}</p>
    </div>
  );
}

export default JokeCard;