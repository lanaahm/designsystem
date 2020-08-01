import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../_foundations';
import { Tabs, TabPane } from '.';
import { Stack } from '../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../_utils/storybook';

const readme = require('./README.md');

export default {
  title: 'Component|Tabs',
  component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};
export const Example = () =>
  React.createElement(
    SystemBlock,
    { title: 'BCC Design System - Tabs' },
    React.createElement(
      Stack,
      { spacing: 'xl' },
      React.createElement(
        ComponentBlock,
        { title: '', withBackground: true, pd: '0' },
        React.createElement(
          Box,
          { display: 'grid', width: '100%', gridGap: '30px', gridTemplateColumns: 'repeat(3,1fr)' },
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Primary' },
            React.createElement(TabPane, { tab: 'Tab 1', key: '1' }),
            React.createElement(TabPane, { tab: 'Tab 2', key: '2' }),
            React.createElement(TabPane, { tab: 'Tab 3', key: '3', disabled: true })
          ),
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Ligth' },
            React.createElement(TabPane, { tab: 'Tab 1', key: '1' }),
            React.createElement(TabPane, { tab: 'Tab 2', key: '2' }),
            React.createElement(TabPane, { tab: 'Tab 3', key: '3', disabled: true })
          ),
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Darkk' },
            React.createElement(TabPane, { tab: 'Tab 1', key: '1' }),
            React.createElement(TabPane, { tab: 'Tab 2', key: '2' }),
            React.createElement(TabPane, { tab: 'Tab 3', key: '3', disabled: true })
          )
        )
      ),
      React.createElement(
        ComponentBlock,
        { title: '', withBackground: true, pd: '0' },
        React.createElement(
          Box,
          { display: 'grid', width: '100%', gridGap: '30px', gridTemplateColumns: 'auto 2fr' },
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Darkk' },
            React.createElement(TabPane, {
              tab: React.createElement('span', null, React.createElement(FontAwesomeIcon, { icon: faShoppingBag })),
              key: '1',
            }),
            React.createElement(TabPane, {
              tab: React.createElement('span', null, React.createElement(FontAwesomeIcon, { icon: faHome })),
              key: '2',
            }),
            React.createElement(TabPane, {
              tab: React.createElement('span', null, React.createElement(FontAwesomeIcon, { icon: faUserCircle })),
              key: '3',
            })
          ),
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Primary' },
            React.createElement(TabPane, { tab: 'Tab 1', key: '1' }),
            React.createElement(TabPane, { tab: 'Tab 2', key: '2' }),
            React.createElement(TabPane, { tab: 'Tab 3', key: '3' }),
            React.createElement(TabPane, { tab: 'Tab 4', key: '4', disabled: true })
          )
        )
      ),
      React.createElement(
        ComponentBlock,
        { title: '', withBackground: true },
        React.createElement(
          Box,
          { display: 'grid', width: '100%', gridGap: '30px', gridTemplateColumns: 'auto 2fr' },
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Darkk' },
            React.createElement(TabPane, {
              tab: React.createElement(
                'span',
                { className: 'icon-with-text' },
                React.createElement(FontAwesomeIcon, { icon: faShoppingBag }),
                React.createElement('p', null, 'Shop')
              ),
              key: '1',
            }),
            React.createElement(TabPane, {
              tab: React.createElement(
                'span',
                { className: 'icon-with-text' },
                React.createElement(FontAwesomeIcon, { icon: faHome }),
                React.createElement('p', null, 'Home')
              ),
              key: '2',
            }),
            React.createElement(TabPane, {
              tab: React.createElement(
                'span',
                { className: 'icon-with-text' },
                React.createElement(FontAwesomeIcon, { icon: faUserCircle }),
                React.createElement('p', null, 'User')
              ),
              key: '3',
            })
          ),
          React.createElement(
            Tabs,
            { defaultActiveKey: '1', tabStyle: 'Primary' },
            React.createElement(TabPane, { tab: 'Tab 1', key: '1' }),
            React.createElement(TabPane, { tab: 'Tab 2', key: '2' }),
            React.createElement(TabPane, { tab: 'Tab 3', key: '3' }),
            React.createElement(TabPane, { tab: 'Tab 4', key: '4', disabled: true })
          )
        )
      )
    )
  );
// # sourceMappingURL=index.stories.js.map
