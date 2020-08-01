import styled from 'styled-components';
import { layout, position, flexbox, grid, space, background, color, typography, border, shadow, } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
const Box = styled('div').withConfig({ shouldForwardProp }) `
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`;
Box.displayName = 'Box';
export default Box;
//# sourceMappingURL=Box.js.map