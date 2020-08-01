import * as React from 'react';
import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BackgroundProps, ColorProps, TypographyProps, BorderProps, ShadowProps } from 'styled-system';
export interface BoxProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BackgroundProps, ColorProps, TypographyProps, BorderProps, ShadowProps {
    className?: string;
    style?: React.CSSProperties;
    color?: string;
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
//# sourceMappingURL=Box.d.ts.map