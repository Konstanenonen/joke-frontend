/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ThemeButton from './ThemeButton';
import TagFilters from './TagFilters';
import { FontContext, ThemeContext } from '../Context';
import FontButton from './FontButton';

function Footer(props) {
  const { setDarkMode, setCategory, setBoringFont } = props;
  const darkMode = useContext(ThemeContext);
  const boringFont = useContext(FontContext);

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  const font = boringFont ? { fontFamily: 'Roboto', fontWeight: 'bold' } : null;

  return (
    <footer style={{ ...styles, ...font }} className="footer">
      <div style={styles} className="context-buttons">
        <ThemeButton setDarkMode={setDarkMode} />
        <FontButton setBoringFont={setBoringFont} />
      </div>
      <TagFilters setCategory={setCategory} />
    </footer>
  );
}

export default Footer;
