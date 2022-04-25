/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';

function NewJokeForm(props) {
  const { fetchNewJokes } = props;
  const [joke, setJoke] = useState({
    title: '',
    category: 'Dad Joke',
    body: '',
  });

  function changeTitle(event) {
    setJoke((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  function changeCategory(event) {
    setJoke((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  }

  function changeBody(event) {
    setJoke((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://joke-rest-api.herokuapp.com/api/add', `title=${joke.title}&category=${joke.category}&body=${joke.body}`)
      .then((response) => {
        console.log(response);
        setJoke({
          title: '',
          category: 'Dad Joke',
          body: '',
        });
        fetchNewJokes();
      });
  }

  return (
    <form className="new-joke-form" onSubmit={handleSubmit}>
      <h2>Add a new joke</h2>
      <ul>
        <li>
          <label htmlFor="title">Title</label>
          <input
            value={joke.title}
            onChange={changeTitle}
            id="title"
            type="text"
            name="title"
          />
        </li>
        <li>
          <label htmlFor="body">The Joke</label>
          <textarea
            value={joke.body}
            onChange={changeBody}
            id="body"
            type="textfie"
            rows={10}
          />
        </li>
        <li>
          <label htmlFor="category">Category</label>
          <select
            value={joke.category}
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
      <button type="submit">Add</button>
    </form>
  );
}

export default NewJokeForm;