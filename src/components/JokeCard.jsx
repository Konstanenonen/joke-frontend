/* eslint-disable react/prop-types */
import React from 'react';

function JokeCard(props) {
  const {
    id,
    title,
    category,
    body,
    toggleEdit,
  } = props;

  return (
    <div id={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{category}</p>
      <button type="button">Delete</button>
      <button onClick={toggleEdit} type="button">Edit</button>
    </div>
  );
}

export default JokeCard;
