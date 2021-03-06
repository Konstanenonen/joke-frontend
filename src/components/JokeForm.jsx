/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FontContext } from '../Context';

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
  const boringFont = useContext(FontContext);

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

  // submitting the form saves the changes to the joke in db
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

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
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
            style={font}
            required
          />
        </li>
        <li>
          <label htmlFor="body">The Joke</label>
          <textarea
            defaultValue={joke.jokeBody}
            onChange={changeBody}
            id="body"
            type="textfie"
            rows={5}
            style={font}
            className="card-textfield"
            required
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
            style={font}
          >
            <option value="Dad Joke" style={font}>Dad Jokes</option>
            <option value="Dark Humor" style={font}>Dark Humor</option>
            <option value="Knock-Knock Joke" style={font}>Knock-Knock Jokes</option>
          </select>
        </li>
      </ul>
      <div className="form-buttons">
        <button style={font} type="submit">Save changes</button>
        <button style={font} type="button" onClick={toggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default JokeForm;
