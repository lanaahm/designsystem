import * as React from 'react';
import styled from 'styled-components';
import toArray from 'rc-util/lib/Children/toArray';
import PropTypes from 'prop-types';

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

const Nav = styled('nav')`
  display: block;
`;
const Ol = styled('ol')`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Breadcrumbs = _a => {
  const { separator = '/', children } = _a;
  const rest = __rest(_a, ['separator', 'children']);
  let crumbs;
  crumbs = toArray(children).map((element, index) => {
    return React.cloneElement(element, { separator, key: index, ...rest });
  });
  return React.createElement(Nav, null, React.createElement(Ol, { ...rest }, ' ', crumbs, ' '));
};
Breadcrumbs.propTypes = {
  separator: PropTypes.oneOf(['/', '|', '>']).isRequired,
};
Breadcrumbs.displayName = 'Breadcrumbs';
export default Breadcrumbs;
// # sourceMappingURL=Breadcrumbs.js.map
