import * as React from 'react';
import { Theme } from '../../../Theme';
import GlobalStyles from './GlobalStyles';
const Provider = ({ children }) => {
    return React.createElement(Theme, null, children);
};
Provider.displayName = 'Provider';
export const ContentProvider = ({ children }) => {
    return (React.createElement(Provider, null,
        React.createElement(GlobalStyles, null),
        children));
};
export default Provider;
//# sourceMappingURL=Provider.js.map