/* eslint-disable react/prop-types */
import React from 'react';

function Category(props) {
  const { category } = props;

  function returnColor() {
    let color;
    switch (category) {
      case 'Dad Joke':
        color = 'green';
        break;
      case 'Dark Humor':
        color = 'black';
        break;
      case 'Knock-Knock Joke':
        color = 'blue';
        break;
      default:
        color = 'black';
    }

    return color;
  }

  const styles = {
    color: returnColor(),
    borderColor: returnColor(),
  };

  return (
    <p style={styles} className="category">{category}</p>
  );
}

export default Category;
