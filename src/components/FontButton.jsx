/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontContext } from '../Context';

function FontButton(props) {
  const { setBoringFont } = props;
  const boringFont = useContext(FontContext);

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <button
      style={font}
      type="button"
      onClick={() => setBoringFont((prevState) => !prevState)}
    >
      {boringFont ? 'Fun font' : 'Boring font'}
    </button>
  );
}

export default FontButton;
