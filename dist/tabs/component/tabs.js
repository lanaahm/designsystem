import * as React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import classNames from 'classnames';

const __rest =
  (this && this.__rest) ||
  function (s, e) {
    const t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };

const ConfigContext = React.createContext({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `bcc-${suffixCls}` : 'bcc';
  },
});
function Tabs(_a) {
  const { type, tabStyle = 'Primary', className, centered, addIcon } = _a;
  const props = __rest(_a, ['type', 'tabStyle', 'className', 'centered', 'addIcon']);
  const { prefixCls: customizePrefixCls } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(RcTabs, {
      direction,
      ...props,
      moreTransitionName: 'slide-up',
      className: classNames(className, {
        [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type),
        [`${prefixCls}-editable-card`]: type === 'editable-card',
        [`${prefixCls}-centered`]: centered,
        [`${prefixCls}-style-${tabStyle}`]: tabStyle,
      }),
      prefixCls,
    })
  );
}
export { Tabs, TabPane };
// # sourceMappingURL=tabs.js.map
