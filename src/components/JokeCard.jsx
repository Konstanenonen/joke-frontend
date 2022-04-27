/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import pen from '../images/pen.png';
import Category from './Category';

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
    <div className="joke-card" id={id}>
      <h2>{title}</h2>
      <button className="delete-button" onClick={deletePost} type="button">X</button>
      <p className="joke-text">{body}</p>
      <div className="bottom-items">
        <Category category={category} />
        <div className="buttons">
          <button className="edit-button" onClick={toggleEdit} type="button">
            <img className="pen" src={pen} alt="A pen" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default JokeCard;
