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

export const Example = () => (
  <SystemBlock title="BCC Design System - Tabs">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Box display="grid" width="100%" gridGap="30px" gridTemplateColumns="repeat(3,1fr)">
          <Tabs defaultActiveKey="1" tabStyle="Primary">
            <TabPane tab="Tab 1" key="1" />
            <TabPane tab="Tab 2" key="2" />
            <TabPane tab="Tab 3" key="3" disabled />
          </Tabs>
          <Tabs defaultActiveKey="1" tabStyle="Ligth">
            <TabPane tab="Tab 1" key="1" />
            <TabPane tab="Tab 2" key="2" />
            <TabPane tab="Tab 3" key="3" disabled />
          </Tabs>
          <Tabs defaultActiveKey="1" tabStyle="Darkk">
            <TabPane tab="Tab 1" key="1" />
            <TabPane tab="Tab 2" key="2" />
            <TabPane tab="Tab 3" key="3" disabled />
          </Tabs>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="" withBackground pd="0">
        <Box display="grid" width="100%" gridGap="30px" gridTemplateColumns="auto 2fr">
          <Tabs defaultActiveKey="1" tabStyle="Darkk">
            <TabPane
              tab={
                <span>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
              }
              key="1"
            />
            <TabPane
              tab={
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
              }
              key="2"
            />
            <TabPane
              tab={
                <span>
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
              }
              key="3"
            />
          </Tabs>
          <Tabs defaultActiveKey="1" tabStyle="Primary">
            <TabPane tab="Tab 1" key="1" />
            <TabPane tab="Tab 2" key="2" />
            <TabPane tab="Tab 3" key="3" />
            <TabPane tab="Tab 4" key="4" disabled />
          </Tabs>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="" withBackground>
        <Box display="grid" width="100%" gridGap="30px" gridTemplateColumns="auto 2fr">
          <Tabs defaultActiveKey="1" tabStyle="Darkk">
            <TabPane
              tab={
                <span className="icon-with-text">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <p>Shop</p>
                </span>
              }
              key="1"
            />
            <TabPane
              tab={
                <span className="icon-with-text">
                  <FontAwesomeIcon icon={faHome} />
                  <p>Home</p>
                </span>
              }
              key="2"
            />
            <TabPane
              tab={
                <span className="icon-with-text">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <p>User</p>
                </span>
              }
              key="3"
            />
          </Tabs>
          <Tabs defaultActiveKey="1" tabStyle="Primary">
            <TabPane tab="Tab 1" key="1" />
            <TabPane tab="Tab 2" key="2" />
            <TabPane tab="Tab 3" key="3" />
            <TabPane tab="Tab 4" key="4" disabled />
          </Tabs>
        </Box>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
