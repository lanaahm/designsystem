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
import { Box, Heading, Stack } from '../../_foundations';
const ComponentBlock = (_a) => {
    var { children, title, withBackground, pd, scaleTitle } = _a, rest = __rest(_a, ["children", "title", "withBackground", "pd", "scaleTitle"]);
    return (React.createElement(Stack, Object.assign({ spacing: "md" }, rest),
        React.createElement(Heading, { color: "hitam02", scale: scaleTitle }, title),
        React.createElement(Box, { backgroundColor: withBackground ? 'white' : undefined, padding: pd ? pd : undefined }, children)));
};
export default ComponentBlock;
//# sourceMappingURL=ComponentBlock.js.map