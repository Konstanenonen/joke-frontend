/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from '../Context';

function Category(props) {
  const { category } = props;
  const darkMode = useContext(ThemeContext);

  // Configures specific colors for all categories
  function returnColor() {
    let color;
    switch (category) {
      case 'Dad Joke':
        color = 'darkgreen';
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
    backgroundColor: darkMode && 'white',
  };

  return (
    <p style={styles} className="category">{category}</p>
  );
}

export default Category;
