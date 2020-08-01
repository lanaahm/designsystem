import * as React from 'react';
import { Provider, GlobalStyles } from '../../_foundations/theme';

const SystemWrapper = storyFn =>
  React.createElement(Provider, null, React.createElement(GlobalStyles, null), storyFn());
export default SystemWrapper;
// # sourceMappingURL=SystemWrapper.js.map
