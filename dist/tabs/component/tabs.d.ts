import * as React from 'react';
import { TabPane, TabsProps as RcTabsProps } from 'rc-tabs';
export interface ConfigConsumerProps {
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
    direction?: 'ltr' | 'rtl';
}
export declare type TabsType = 'line' | 'card' | 'editable-card';
export declare type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export declare type TabsStyle = 'Primary' | 'Ligth' | 'Darkk';
export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
    type?: TabsType;
    centered?: boolean;
    addIcon?: React.ReactNode;
    tabStyle?: TabsStyle;
}
declare function Tabs({ type, tabStyle, className, centered, addIcon, ...props }: TabsProps): JSX.Element;
export { Tabs, TabPane };
//# sourceMappingURL=tabs.d.ts.map