/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { FontContext, ThemeContext } from '../Context';
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
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

  const styles = darkMode
    ? { backgroundColor: '#01020a', color: 'white', borderColor: 'white' }
    : null;

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <div style={styles} className="joke-card" id={id}>
      {showDelete ? (
        <DeleteConfirmation
          setShowDelete={setShowDelete}
          id={id}
          fetchNewJokes={fetchNewJokes}
        />
      ) : (
        <>
          <h2 style={styles}>{title}</h2>
          <button
            className="delete-button"
            onClick={() => setShowDelete(true)}
            type="button"
            style={font}
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
                style={font}
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
