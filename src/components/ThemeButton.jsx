/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import bulb from '../images/bulb.png';
import moon from '../images/moon.png';
import { FontContext, ThemeContext } from '../Context';

function ThemeButton(props) {
  const { setDarkMode } = props;
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <button
      type="button"
      className="theme-button"
      onClick={() => setDarkMode((prevState) => !prevState)}
      style={font}
    >
      {darkMode ? (
        <img height={20} src={bulb} alt="A light bulb" />
      ) : (
        <img height={20} src={moon} alt="A half moon" />
      )}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeButton;
