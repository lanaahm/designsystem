import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { typographyBase, shouldForwardTextProp } from '../utils';
const Heading = styled('h2').withConfig({
    shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
}) `
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.heading',
})}
  ${typographyBase}
`;
Heading.defaultProps = {
    color: '#121615',
    scale: 'heading5',
};
Heading.displayName = 'Heading';
export default Heading;
//# sourceMappingURL=Heading.js.map