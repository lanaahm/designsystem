import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Heading, Box } from '../../_foundations';
import { colors } from '../variables';

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

const HorizontalRule = styled('hr')`
  ${space}
  border: none;
  border-top: 1px solid ${themeGet('colors.hitam04', colors.hitam04)};
`;
const SystemSubheading = _a => {
  const { children } = _a;
  const rest = __rest(_a, ['children']);
  return React.createElement(
    Box,
    { ...rest },
    React.createElement(Heading, { scale: 'heading3' }, children),
    React.createElement(HorizontalRule, { mt: 'sm', mb: 0 })
  );
};
SystemSubheading.displayName = 'SystemSubheading';
export default SystemSubheading;
// # sourceMappingURL=SystemSubheading.js.map
