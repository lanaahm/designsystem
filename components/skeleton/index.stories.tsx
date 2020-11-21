import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Skeleton from "./component/Skeleton";

export default {
  title: "Component|Skeleton",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  return (
    <SystemBlock title="BCC Design System - Skeleton">
      <Stack spacing="xl">
        <Skeleton />
      </Stack>
    </SystemBlock>
  );
};

export const Custom = () => {
    return (
      <SystemBlock title="BCC Design System - Skeleton">
        <Stack spacing="xl">
          <Skeleton height="200px" width="500px"/>
        </Stack>
      </SystemBlock>
    );
  };
