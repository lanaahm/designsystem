import * as React from 'react';
import { Box, Heading, Text } from '../../_foundations';
import StoryContainer from './StoryContainer';
const SystemHeader = ({ title, subtitle }) => (React.createElement(Box, { bg: "blue09", px: "lg", py: "xl", color: "black" },
    React.createElement(StoryContainer, null,
        React.createElement(Heading, { as: "h1", scale: "heading5", color: "black", fontWeight: 500, maxWidth: 500, mb: 0 }, title),
        typeof subtitle === 'string' ? (React.createElement(Text, { as: "p", mb: 0, mt: "xs", scale: "body1", fontWeight: 100, maxWidth: 500, color: "hitam04" }, subtitle)) : (subtitle))));
SystemHeader.displayName = 'SystemHeader';
export default SystemHeader;
//# sourceMappingURL=SystemHeader.js.map