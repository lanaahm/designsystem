import styled from 'styled-components';
import { variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SubtitlehScale } from '../../../Theme';

import { typographyBase, TypographyBaseProps, shouldForwardTextProp } from '../utils';

export interface ParagraphProps extends TypographyBaseProps {
  /** Size value of the text. */
  scale?: SubtitlehScale;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled('p').withConfig<ParagraphProps>({
  shouldForwardProp: prop => shouldForwardProp(prop) && shouldForwardTextProp(prop),
})`
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
