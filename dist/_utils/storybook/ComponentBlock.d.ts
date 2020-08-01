import * as React from 'react';
import { StackProps } from '../../_foundations';
import { HeadingScale } from '../../Theme';

interface ComponentBlockProps extends Omit<StackProps, 'spacing'> {
  title?: string;
  withBackground?: boolean;
  scaleTitle?: HeadingScale;
  pd?: string;
}
declare const ComponentBlock: React.FC<ComponentBlockProps>;
export default ComponentBlock;
// # sourceMappingURL=ComponentBlock.d.ts.map
