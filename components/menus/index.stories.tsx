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
          <Menu.Item name="Profile" onClick={(e) => setIsClosed(!isClosed)} />
          <Menu.Item
            name="My account"
            onClick={(e) => setIsClosed(!isClosed)}
          />
          <Menu.Item name="Settings" onClick={(e) => setIsClosed(!isClosed)}  />
          <Menu.Item name="Logout" onClick={(e) => setIsClosed(!isClosed) }hasDivider />
        </Menu>
      </Stack>
    </SystemBlock>
  );
};

export const withSubItem = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
          {isClosed ? "Open" : "Close"}
        </Button>
        <Menu opened={isClosed}>
          <Menu.Item name="Profile" onClick={(e) => setIsClosed(!isClosed)} />
          <Menu.Item name="My account" onClick={(e) => setIsClosed(!isClosed)}>
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>Stories</Menu.SubItem>
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>Wallet</Menu.SubItem>
          </Menu.Item>
          <Menu.Item name="Settings">
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>History</Menu.SubItem>
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>Privacy</Menu.SubItem>
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>Login Activity</Menu.SubItem>
            <Menu.SubItem onClick={(e) => setIsClosed(!isClosed)}>Push Notification</Menu.SubItem>
          </Menu.Item>
          <Menu.Item
            name="Logout"
            onClick={(e) => setIsClosed(!isClosed)}
          ></Menu.Item>
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
          <Menu.Item name="Profile" disabled></Menu.Item>
          <Menu.Item name="My account" disabled></Menu.Item>
          <Menu.Item name="Settings"></Menu.Item>
          <Menu.Item name="Logout"></Menu.Item>
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
          <Menu.Item logo={<Lock />} name="Profile"></Menu.Item>
          <Menu.Item logo={<User />} name="My account"></Menu.Item>
          <Menu.Item logo={<Settings />} name="Settings"></Menu.Item>
          <Menu.Item logo={<Exit />} name="Logout"></Menu.Item>
        </Menu>
      </Stack>
    </SystemBlock>
  );
};
