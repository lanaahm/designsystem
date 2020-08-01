import * as React from 'react';
import { Space } from '../../../../Theme';
import { BoxProps } from '../../../box';
export interface StackProps extends Omit<BoxProps, 'color'> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
    spacing?: Space;
}
declare const Stack: React.FC<StackProps>;
export default Stack;
//# sourceMappingURL=Stack.d.ts.map