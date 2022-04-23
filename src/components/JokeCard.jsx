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
      .then((response) => {
        console.log(response);
        fetchNewJokes();
      });
  }

  return (
    <div id={id}>
      <h2>{title}</h2>
      <p className="joke-text">{body}</p>
      <div className="bottom-items">
        <p>{category}</p>
        <div className="buttons">
          <button onClick={toggleEdit} type="button">Edit</button>
          <button onClick={deletePost} type="button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default JokeCard;
