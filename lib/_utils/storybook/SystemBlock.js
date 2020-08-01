import * as React from 'react';
import SystemHeader from './SystemHeader';
import SystemContainer from './SystemContainer';
import { Box } from '../../_foundations';
const SystemBlock = ({ children, title, subtitle, noBackground }) => (React.createElement(Box, { display: "flex", flexDirection: "column", position: "relative", width: "100%", height: "100%", minHeight: "100%" },
    title ? React.createElement(SystemHeader, { title: title, subtitle: subtitle }) : undefined,
    React.createElement(SystemContainer, { py: title ? undefined : 'xxl', noBackground: noBackground }, children)));
SystemBlock.displayName = 'SystemBlock';
export default SystemBlock;
//# sourceMappingURL=SystemBlock.js.map