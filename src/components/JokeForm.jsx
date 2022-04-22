/* eslint-disable react/prop-types */
import React from 'react';

function JokeForm(props) {
  const {
    id,
    title,
    category,
    body,
    toggleEdit,
  } = props;

  return (
    <div id={id}>
      <h2>Form</h2>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{category}</p>
      <button onClick={toggleEdit} type="button">Cancel Edit</button>
    </div>
  );
}

export default JokeForm;
