import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { typographyBase, shouldForwardTextProp } from '../utils';

const Text = styled('span').withConfig({
  shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
})`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.TextScale',
  })}
  ${typographyBase}
`;
Text.defaultProps = {
  scale: 'body1',
};
Text.displayName = 'Text';
export default Text;
// # sourceMappingURL=Text.js.map
