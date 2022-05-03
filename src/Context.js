/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

const ThemeContext = createContext(false);
const FontContext = createContext(false);

export { ThemeContext, FontContext };
