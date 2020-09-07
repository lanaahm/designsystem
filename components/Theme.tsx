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
  table,
  componentStyles,
} from './_utils';

export const themeProps = {
  // Default styled-system theme props based on the theme specification:
  // https://styled-system.com/theme-specification
  colors,
  space,
  fonts,
  shadows,
  radiuss,
  table,
  breakpoints,
  mediaQueries,

  // Custom theme props based on custom component variants.
  elevation,
  componentStyles,
};

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};

export type Color = keyof typeof themeProps['colors'];
export type Space = keyof typeof themeProps['space'];
export type Elevation = keyof typeof themeProps['elevation'];
export type Table = keyof typeof themeProps['table'];
export type CardElevation = keyof typeof componentStyles.boxShadow;
export type SubtitlehScale = keyof typeof componentStyles.subtitle;
export type TextScale = keyof typeof componentStyles.text;
export type BoxShadow = keyof typeof componentStyles.boxShadow;
export type HeadingScale = keyof typeof componentStyles.heading;
