import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Search from "./component/Search";
import SearchSkeleton from "./component/SearchSkeleton";

export default {
  title: "Component|Search",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Search">
      <Stack spacing="xl">
        <Search
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Skeleton = () => {
  return (
    <SystemBlock title="BCC Design System - Search">
      <Stack spacing="xl">
        <SearchSkeleton />
      </Stack>
    </SystemBlock>
  );
};

export const Placeholder = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Search Placeholder">
      <Stack spacing="xl">
        <Search
          value={search}
          placeholder="What are you looking for ?"
          handleChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const ClearValue = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Search Clear Value">
      <Stack spacing="xl">
        <Search
          value={search}
          placeholder="Search here"
          clearValue
          handleChange={(e) => setSearch(e.target.value)}
          handleClear={() => setSearch("")}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Search">
    <Stack spacing="xl">
      <Search disabled />
    </Stack>
  </SystemBlock>
);
