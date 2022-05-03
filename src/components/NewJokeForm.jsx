/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FontContext, ThemeContext } from '../Context';

function NewJokeForm(props) {
  const { fetchNewJokes } = props;
  const [joke, setJoke] = useState({
    title: '',
    category: 'Dad Joke',
    body: '',
  });
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

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

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <div style={{ ...styles, ...font }} className="form-area">
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
              style={font}
              required
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
              style={font}
              required
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
              style={font}
            >
              <option style={font} value="Dad Joke">Dad Jokes</option>
              <option style={font} value="Dark Humor">Dark Humor</option>
              <option style={font} value="Knock-Knock Joke">Knock-Knock Jokes</option>
            </select>
          </li>
        </ul>
        <button style={font} type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewJokeForm;
