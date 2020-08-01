import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  colors,
  space,
  fonts,
  elevation,
  breakpoints,
  mediaQueries,
  shadows,
  radiuss,
  componentStyles,
} from './_utils';

export const themeProps = {
  colors,
  space,
  fonts,
  shadows,
  radiuss,
  breakpoints,
  mediaQueries,
  elevation,
  componentStyles,
};
export const Theme = ({ children }) => {
  return React.createElement(ThemeProvider, { theme: themeProps }, children);
};
// # sourceMappingURL=Theme.js.map
