import { createGlobalStyle } from 'styled-components';
import normalize from '../styles/normalize';
import base from '../styles/base';
import table from '../styles/table';

const fonts = require('@openfonts/work-sans_all');

const GlobalStyles = createGlobalStyle`
    ${fonts}
    ${normalize}
    ${base}
    ${table}
`;

export default GlobalStyles;
