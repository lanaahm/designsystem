var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Box } from '../../../box';
const Stack = (_a) => {
    var { children, spacing } = _a, rest = __rest(_a, ["children", "spacing"]);
    const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);
    return (React.createElement(Box, Object.assign({}, rest), validChildrenArray.map((child, i) => {
        const isLastChild = validChildrenArray.length === i + 1;
        const spacingProps = { mb: isLastChild ? 0 : spacing };
        if (typeof child === 'string' || child.type === React.Fragment) {
            return (React.createElement(Box, Object.assign({ key: `stack-child-${i}` }, spacingProps), child));
        }
        return React.cloneElement(child, spacingProps);
    })));
};
Stack.displayName = 'Stack';
export default Stack;
//# sourceMappingURL=Stack.js.map