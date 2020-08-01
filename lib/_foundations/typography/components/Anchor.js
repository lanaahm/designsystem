import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { themeProps } from '../../../Theme';
import Text from './Text';
const AnchorRoot = Text.withComponent('a');
const Anchor = styled(AnchorRoot) `
  color: ${themeGet('colors.link', themeProps.colors.biru)};
  &:hover,
  &:focus {
    color: ${themeGet('colors.link-hover', themeProps.colors['link-hover'])};
    text-decoration: underline;
  }
`;
Anchor.displayName = 'Link';
export default Anchor;
//# sourceMappingURL=Anchor.js.map