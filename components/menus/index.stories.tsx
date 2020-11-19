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
import MenuItem from "./component/MenuItem";
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
          <MenuItem onClick={(e) => setIsClosed(!isClosed)}>Profile</MenuItem>
          <MenuItem onClick={(e) => setIsClosed(!isClosed)}>
            My account
          </MenuItem>
          <MenuItem onClick={(e) => setIsClosed(!isClosed)}>Settings</MenuItem>
          <MenuItem onClick={(e) => setIsClosed(!isClosed)}>Logout</MenuItem>
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
          <MenuItem disabled>Profile</MenuItem>
          <MenuItem disabled>My account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
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
          <MenuItem logo={<Lock />}>Profile</MenuItem>
          <MenuItem logo={<User />}>My account</MenuItem>
          <MenuItem logo={<Settings />}>Settings</MenuItem>
          <MenuItem logo={<Exit />}>Logout</MenuItem>
        </Menu>
      </Stack>
    </SystemBlock>
  );
};
