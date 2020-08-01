import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { typographyBase, shouldForwardTextProp } from '../utils';
const Paragraph = styled('p').withConfig({
    shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
}) `
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.SubtitlehScale',
    variants: {
        400: {},
        300: {},
    },
})}
  ${typographyBase}
`;
Paragraph.defaultProps = {
    scale: 'subtitle1',
};
Paragraph.displayName = 'Paragraph';
export default Paragraph;
//# sourceMappingURL=Paragraph.js.map