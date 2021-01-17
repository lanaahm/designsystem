import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import InfoIcon from "@material-ui/icons/Info";
import SnackBar from "./component/SnackBar";
import { SnackBarWrapper } from "./component/SnackBar";

export default {
  title: "Component|Snack Bar",
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" placement="left" />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <Stack spacing="xl">
        <button onClick={generate}>Snack Bar</button>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const DefaultTwoRows = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, culpa."
        placement="left"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" action="action" />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl" style={{ margin: "auto" }}>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithActionTwoRows = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        action="action"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl" style={{ margin: "auto" }}>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithIcon = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" icon={<InfoIcon />} />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithIconAndAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" action="action" />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WideLayout = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        layout="desktop"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WideLayoutWithAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        action="action"
        layout="desktop"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const Placement = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Placement left" placement="left" />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          <SnackBar text="Placement left" placement="left" />
          <SnackBar text="Placement center" placement="center" />
          <SnackBar text="Placement right" placement="right" />
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const Error = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar text="Error occured" error={true} action="action" />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};
