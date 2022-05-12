/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import axios from 'axios';
import priority from '../images/priority.png';
import priorityWhite from '../images/priority_white.png';
import { FontContext, ThemeContext } from '../Context';

function DeleteConfirmation(props) {
  const { setShowDelete, id, fetchNewJokes } = props;
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

  // Delete operation that removes the specific joke from db
  function deletePost() {
    axios
      .delete(`https://joke-rest-api.herokuapp.com/api/delete/${id}`)
      .then((response) => {
        console.log(response);
        fetchNewJokes();
      });
  }

  const styles = darkMode ? { color: 'white' } : null;

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <div style={styles} className="delete-confirmation">
      <h2>{`Do you want to delete the joke with id: ${id}`}</h2>
      <div className="confirmation-buttons">
        <button style={font} onClick={deletePost} className="confrim-delete-btn" type="button">
          Yes, delete
        </button>
        <button style={font} onClick={() => setShowDelete(false)} type="button">
          No, go back
        </button>
      </div>
      {darkMode ? <img src={priorityWhite} alt="Exclamation mark" /> : <img height={40} src={priority} alt="Exclamation mark" /> }
    </div>
  );
}

export default DeleteConfirmation;
