import * as React from "react";
import RcTabs, { TabPane, TabsProps as RcTabsProps } from "rc-tabs";
import classNames from "classnames";
import { prefix } from "@fortawesome/free-solid-svg-icons";

// NAMBAHIN WAVE ANIMATION

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
  direction?: "ltr" | "rtl";
}
const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `bcc-${suffixCls}` : "bcc";
  },
});

export type TabsType = "line" | "card" | "editable-card";
export type TabsPosition = "top" | "right" | "bottom" | "left";
export type TabsStyle = "Primary" | "Light" | "Dark";

export interface TabsProps extends Omit<RcTabsProps, "editable"> {
  type?: TabsType;
  centered?: boolean;
  addIcon?: React.ReactNode;
  tabStyle?: TabsStyle | string;
}

function Tabs({
  type,
  tabStyle = "Primary",
  className,
  centered,
  addIcon,
  ...props
}: TabsProps) {
  const { prefixCls: customizePrefixCls } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tabs", customizePrefixCls);

  return (
    <>
      <RcTabs
        direction={direction}
        {...props}
        moreTransitionName="slide-up"
        className={classNames(className, {
          [`${prefixCls}-card`]: ["card", "editable-card"].includes(
            type as string
          ),
          [`${prefixCls}-editable-card`]: type === "editable-card",
          [`${prefixCls}-centered`]: centered,
          [`${prefixCls}-style-${tabStyle}`]: tabStyle,
          // [`${prefixCls}-`]:true,
        })}
        prefixCls={prefixCls}
      />
    </>
  );
}

export { Tabs, TabPane };
