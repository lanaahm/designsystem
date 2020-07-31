import { createGlobalStyle } from "styled-components";
import normalize from "../styles/normalize";
import base from "../styles/base";

require("@openfonts/work-sans_all");

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${base}
`;

export default GlobalStyles;
