/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import JokeForm from './JokeForm';
import JokeCard from './JokeCard';

function Switch(props) {
  const {
    id,
    title,
    category,
    body,
  } = props;
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div>
      {isEdited ? (
        <JokeForm
          id={id}
          title={title}
          category={category}
          body={body}
          toggleEdit={() => setIsEdited((prevState) => !prevState)}
        />
      ) : (
        <JokeCard
          id={id}
          title={title}
          category={category}
          body={body}
          toggleEdit={() => setIsEdited((prevState) => !prevState)}
        />
      )}
    </div>
  );
}

export default Switch;
