/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ThemeButton from './ThemeButton';
import TagFilters from './TagFilters';
import { ThemeContext } from '../Context';

function Footer(props) {
  const { setDarkMode, setCategory } = props;
  const darkMode = useContext(ThemeContext);

  // Sets colors for darkmode if turned on
  const styles = darkMode
    ? { backgroundColor: '#161126', borderColor: 'white', color: 'white' }
    : null;

  return (
    <footer style={styles} className="footer">
      <ThemeButton setDarkMode={setDarkMode} />
      <TagFilters setCategory={setCategory} />
    </footer>
  );
}

export default Footer;
