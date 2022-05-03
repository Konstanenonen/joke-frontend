/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ThemeButton from './ThemeButton';
import TagFilters from './TagFilters';
import { ThemeContext } from '../Context';

function Footer(props) {
  const { setDarkMode, setCategory, setBoringFont } = props;
  const darkMode = useContext(ThemeContext);

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  return (
    <footer style={styles} className="footer">
      <ThemeButton setDarkMode={setDarkMode} />
      <button type="button" onClick={() => setBoringFont((prevState) => !prevState)}>Set Boring</button>
      <TagFilters setCategory={setCategory} />
    </footer>
  );
}

export default Footer;
