import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Button from "@material-ui/core/Button";
import Menu from "./component/Menu";
import Lock from "@material-ui/icons/Lock";
import User from "@material-ui/icons/SupervisedUserCircle";
import Settings from "@material-ui/icons/Settings";
import Exit from "@material-ui/icons/ExitToApp";

export default {
  title: "Component|Menu",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
          {isClosed ? "Open" : "Close"}
        </Button>
        <Menu opened={isClosed}>
          <Menu.Item onClick={(e) => setIsClosed(!isClosed)}>Profile</Menu.Item>
          <Menu.Item onClick={(e) => setIsClosed(!isClosed)}>
            My account
          </Menu.Item>
          <Menu.Item onClick={(e) => setIsClosed(!isClosed)}>Settings</Menu.Item>
          <Menu.Item onClick={(e) => setIsClosed(!isClosed)}>Logout</Menu.Item>
        </Menu>
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
          {isClosed ? "Open" : "Close"}
        </Button>
        <Menu opened={isClosed}>
          <Menu.Item disabled>Profile</Menu.Item>
          <Menu.Item disabled>My account</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu>
      </Stack>
    </SystemBlock>
  );
};

export const withIcon = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
          {isClosed ? "Open" : "Close"}
        </Button>
        <Menu opened={isClosed}>
          <Menu.Item logo={<Lock />}>Profile</Menu.Item>
          <Menu.Item logo={<User />}>My account</Menu.Item>
          <Menu.Item logo={<Settings />}>Settings</Menu.Item>
          <Menu.Item logo={<Exit />}>Logout</Menu.Item>
        </Menu>
      </Stack>
    </SystemBlock>
  );
};
