/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import pen from '../images/pen.png';
import Category from './Category';
import DeleteConfirmation from './DeleteConfirmation';

function JokeCard(props) {
  const {
    id,
    title,
    category,
    body,
    toggleEdit,
    fetchNewJokes,
  } = props;
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="joke-card" id={id}>
      {showDelete ? (
        <DeleteConfirmation
          setShowDelete={setShowDelete}
          id={id}
          fetchNewJokes={fetchNewJokes}
        />
      ) : (
        <>
          <h2>{title}</h2>
          <button
            className="delete-button"
            onClick={() => setShowDelete(true)}
            type="button"
          >
            X
          </button>
          <p className="joke-text">{body}</p>
          <div className="bottom-items">
            <Category category={category} />
            <div className="buttons">
              <button
                className="edit-button"
                onClick={toggleEdit}
                type="button"
              >
                <img className="pen" src={pen} alt="A pen" />
                Edit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default JokeCard;
