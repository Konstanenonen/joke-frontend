/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';

function JokeForm(props) {
  const {
    id,
    title,
    category,
    body,
    toggleEdit,
    fetchNewJokes,
  } = props;
  const [joke, setJoke] = useState({
    jokeTitle: title,
    jokeCategory: category,
    jokeBody: body,
  });

  function changeTitle(event) {
    setJoke((prevState) => ({
      ...prevState,
      jokeTitle: event.target.value,
    }));
  }

  function changeCategory(event) {
    setJoke((prevState) => ({
      ...prevState,
      jokeCategory: event.target.value,
    }));
  }

  function changeBody(event) {
    setJoke((prevState) => ({
      ...prevState,
      jokeBody: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`https://joke-rest-api.herokuapp.com/api/update/${id}`, `title=${joke.jokeTitle}&category=${joke.jokeCategory}&body=${joke.jokeBody}`)
      .then((response) => {
        console.log(response);
        fetchNewJokes();
        toggleEdit();
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit the joke</h2>
      <ul>
        <li>
          <label htmlFor="title">Title</label>
          <input
            value={joke.jokeTitle}
            onChange={changeTitle}
            id="title"
            type="text"
            name="title"
          />
        </li>
        <li>
          <label htmlFor="body">The Joke</label>
          <textarea
            defaultValue={joke.jokeBody}
            onChange={changeBody}
            id="body"
            type="textfie"
          />
        </li>
        <li>
          <label htmlFor="category">Category</label>
          <select
            defaultValue={joke.jokeCategory}
            onChange={changeCategory}
            id="category"
            type="select"
            name="category"
          >
            <option value="Dad Joke">Dad Joke</option>
            <option value="Dark Humor">Dark Humor</option>
          </select>
        </li>
      </ul>
      <button type="submit">Save changes</button>
      <button type="button" onClick={toggleEdit}>Cancel</button>
    </form>
  );
}

export default JokeForm;
