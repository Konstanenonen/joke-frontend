/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import JokeForm from './JokeForm';
import JokeCard from './JokeCard';
import { ThemeContext } from '../Context';

function Switch(props) {
  const {
    id,
    title,
    category,
    body,
    fetchNewJokes,
  } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const darkMode = useContext(ThemeContext);

  const styles = darkMode
    ? { backgroundColor: '#01020a', color: 'white', borderColor: 'white' }
    : null;

  return (
    <div style={styles} className={showDelete ? 'shake' : ''}>
      {isEdited ? (
        <JokeForm
          id={id}
          title={title}
          category={category}
          body={body}
          toggleEdit={() => setIsEdited((prevState) => !prevState)}
          fetchNewJokes={fetchNewJokes}
        />
      ) : (
        <JokeCard
          id={id}
          title={title}
          category={category}
          body={body}
          toggleEdit={() => setIsEdited((prevState) => !prevState)}
          fetchNewJokes={fetchNewJokes}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      )}
    </div>
  );
}

export default Switch;
