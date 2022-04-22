/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

function JokeCard(props) {
  const {
    id,
    title,
    category,
    body,
    toggleEdit,
    fetchNewJokes,
  } = props;

  function deletePost() {
    axios
      .delete(`https://joke-rest-api.herokuapp.com/api/delete/${id}`)
      .then(() => {
        console.log('Joke deleted');
        fetchNewJokes();
      });
  }

  return (
    <div id={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{category}</p>
      <button onClick={deletePost} type="button">Delete</button>
      <button onClick={toggleEdit} type="button">Edit</button>
    </div>
  );
}

export default JokeCard;
