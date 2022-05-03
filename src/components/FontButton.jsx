/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontContext } from '../Context';
import boring from '../images/boring.png';
import fun from '../images/fun.png';

function FontButton(props) {
  const { setBoringFont } = props;
  const boringFont = useContext(FontContext);

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <button
      style={font}
      className="theme-button"
      type="button"
      onClick={() => setBoringFont((prevState) => !prevState)}
    >
      {boringFont ? (
        <img height={20} src={fun} alt="A happy face" />
      ) : (
        <img height={20} src={boring} alt="A sad face" />
      )}
      {boringFont ? 'Fun font' : 'Boring font'}
    </button>
  );
}

export default FontButton;
