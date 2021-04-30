import * as React from "react";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import { Stack } from "../_foundations/common";
import { Tabs, TabPane } from ".";
import {
  withKnobs,
  select,
} from "@storybook/addon-knobs";
import { Box } from "../_foundations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const readme = require("./README.md");

export default {
  title: "Component|Tabs",
  component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};


export const miniTab = () => {
  const label = "Color";
  const optionsColor = {
    Primary: "Primary",
    Light: "Light",
    Dark: "Dark",
  };
  const defaultValue = "Primary";
  return (
    <SystemBlock title="BCC Design System - Mini Tab">
      <Stack spacing="xl">
        <ComponentBlock title="" withBackground pd="">
          <Box
            display="grid"
            width="100%"
            gridGap="30px"
            gridTemplateColumns="repeat(3,1fr)"
          >
            <Tabs
              defaultActiveKey="1"
              tabStyle={select(label, optionsColor, defaultValue)}
            >
              <TabPane tab="Tab 1" key="1"></TabPane>
              <TabPane tab="Tab 2" key="2"></TabPane>
              <TabPane tab="Tab 3" key="3" disabled></TabPane>
            </Tabs>
          </Box>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};

export const iconTab = () => {
  const label = "Color";
  const optionsColor = {
    Primary: "Primary",
    Light: "Light",
    Dark: "Dark",
  };
  const defaultValue = "Primary";
  return (
    <SystemBlock title="BCC Design System - Icon Tab">
      <Stack spacing="xl">
        <ComponentBlock title="" withBackground pd="0">
          <Box
            display="grid"
            width="100%"
            gridGap="30px"
            gridTemplateColumns="auto 2fr"
          >
            <Tabs
              defaultActiveKey="1"
              tabStyle={select(label, optionsColor, defaultValue)}
            >
              <TabPane
                tab={
                  <span>
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </span>
                }
                key="1"
              ></TabPane>
              <TabPane
                tab={
                  <span>
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                }
                key="2"
              ></TabPane>
              <TabPane
                tab={
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </span>
                }
                key="3"
              ></TabPane>
            </Tabs>
          </Box>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};

export const iconTabWithLabel = () => {
  const label = "Color";
  const optionsColor = {
    Primary: "Primary",
    Light: "Light",
    Dark: "Dark",
  };
  const defaultValue = "Primary";
  return (
    <SystemBlock title="BCC Design System - Icon Tab With Label">
      <Stack spacing="xl">
        <ComponentBlock title="" withBackground>
          <Box
            display="grid"
            width="100%"
            gridGap="30px"
            gridTemplateColumns="auto 2fr"
          >
            <Tabs
              defaultActiveKey="1"
              tabStyle={select(label, optionsColor, defaultValue)}
            >
              <TabPane
                tab={
                  <span className="icon-with-text">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <p>Shop</p>
                  </span>
                }
                key="1"
              ></TabPane>
              <TabPane
                tab={
                  <span className="icon-with-text">
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                  </span>
                }
                key="2"
              ></TabPane>
              <TabPane
                tab={
                  <span className="icon-with-text">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>User</p>
                  </span>
                }
                key="3"
              ></TabPane>
            </Tabs>
          </Box>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};

export const fullTab = () => {
  const label = "Color";
  const optionsColor = {
    Primary: "Primary",
    Light: "Light",
    Dark: "Dark",
  };
  const defaultValue = "Primary";
  return (
    <SystemBlock title="BCC Design System - Full Tab">
      <Stack spacing="xl">
        <ComponentBlock title="" withBackground>
          <Box
            display="grid"
            width="100%"
            gridGap="30px"
            gridTemplateColumns="auto 2fr"
          >
            <Tabs defaultActiveKey="1" tabStyle={select(label, optionsColor, defaultValue)}>
              <TabPane tab="Tab 1" key="1"></TabPane>
              <TabPane tab="Tab 2" key="2"></TabPane>
              <TabPane tab="Tab 3" key="3"></TabPane>
              <TabPane tab="Tab 4" key="4" disabled></TabPane>
            </Tabs>
          </Box>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};
