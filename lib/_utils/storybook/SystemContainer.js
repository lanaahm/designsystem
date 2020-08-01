import * as React from 'react';
import { Box } from '../../_foundations';
import StoryContainer from './StoryContainer';
const SystemContainer = ({ children, py, noBackground = false }) => (React.createElement(Box, { flex: "1 1 auto", px: "lg", py: py, backgroundColor: !noBackground ? 'white' : undefined },
    React.createElement(StoryContainer, null, children)));
SystemContainer.displayName = 'SystemContainer';
export default SystemContainer;
//# sourceMappingURL=SystemContainer.js.map