/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

function DeleteConfirmation(props) {
  const { setShowDelete, id, fetchNewJokes } = props;

  function deletePost() {
    axios
      .delete(`https://joke-rest-api.herokuapp.com/api/delete/${id}`)
      .then((response) => {
        console.log(response);
        fetchNewJokes();
      });
  }

  return (
    <div className="delete-confirmation">
      <h2>{`Do you want to delete the joke with id: ${id}`}</h2>
      <div className="confirmation-buttons">
        <button onClick={deletePost} className="confrim-delete-btn" type="button">
          Yes, delete
        </button>
        <button onClick={() => setShowDelete(false)} type="button">
          No, go back
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
