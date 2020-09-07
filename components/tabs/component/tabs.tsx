import * as React from 'react';
import RcTabs, { TabPane, TabsProps as RcTabsProps } from 'rc-tabs';
import classNames from 'classnames';
import { ConfigContext } from '../../config-provider';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type TabsStyle = 'Primary' | 'Ligth' | 'Darkk';

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  type?: TabsType;
  centered?: boolean;
  addIcon?: React.ReactNode;
  tabStyle?: TabsStyle;
}

const Tabs: React.FC<TabsProps> = ({ type, tabStyle = 'Primary', className, centered, addIcon, ...props }) => {
  const { prefixCls: customizePrefixCls } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);

  return (
    <RcTabs
      direction={direction}
      {...props}
      moreTransitionName="slide-up"
      className={classNames(className, {
        [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type as string),
        [`${prefixCls}-editable-card`]: type === 'editable-card',
        [`${prefixCls}-centered`]: centered,
        [`${prefixCls}-style-${tabStyle}`]: tabStyle,
      })}
      prefixCls={prefixCls}
    />
  );
};

export { Tabs, TabPane };
