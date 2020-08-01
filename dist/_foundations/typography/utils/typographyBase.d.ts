/// <reference types="react" />
import { LayoutProps, SpaceProps, ColorProps, TypographyProps as StyledTypographyProps } from 'styled-system';

export interface TypographyBaseProps extends LayoutProps, SpaceProps, ColorProps, StyledTypographyProps {
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  color?: string;
}
declare const typographyBase: import('styled-components').FlattenInterpolation<import('styled-components').ThemeProps<
  any
>>;
export default typographyBase;
// # sourceMappingURL=typographyBase.d.ts.map
