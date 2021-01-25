import * as React from "react";
import styled, { keyframes } from "styled-components";
import { colors, typeScale } from "../../_utils/variables";

const fadeIn = keyframes`
  from{
    opacity : 0;
    transform : translateY(5%);
  }

  to{
    opacity : 1;
    transform : translateY(0%);
  }
`;

const fadeOut = keyframes`
  from{
    opacity : 1;
    transform : translateY(0%);
  }

  to{
    opacity : 0;
    transform : translateY(-30%);
  }
`;

export interface SnackBarProps {
  icon?: React.ReactElement;
  action?: string;
  text?: string;
  error?: boolean;
  layout?: "mobile" | "desktop";
  placement?: "left" | "center" | "right";
  duration ?: number;
}

export const SnackBarWrapper = styled("div")`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 56px 56px 56px;
  @media screen and (max-width: 576px) {
    padding: 0 16px 16px 16px;
  }
`;

const SnackBarContainer = styled("div")`
  display: flex;
  position: relative;
  bottom : 30%;
  justify-content: ${(props) => {
    switch (props.placement) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
    }
  }};
`;

const SnackBarInner = styled("div")`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-direction: row;
  position: relative;
  min-height: 48px;
  opacity: ${(props) => (props.animation === "fadeIn" ? 1 : 0)};
  animation: 1s ${(props) => (props.animation === "fadeIn" ? fadeIn : fadeOut)} ease-out;
  background-color: ${(props) => (props.error ? colors.merah : colors.biru)};
  ${(props) => (props.layout === "mobile" ? "width: 344px;" : "")};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
  color: ${colors.putih};
  letter-spacing: 0.15;
`;

const Text = styled("div")`
  width: 100%;
`;

const Action = styled("div")`
  margin-left: 24px;
`;

const Icon = styled("div")`
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

const Snackbar: React.FC<SnackBarProps> = ({
  text,
  action,
  icon,
  error,
  placement,
  layout,
  duration
}) => {
  const [animation, setAnimation] = React.useState("fadeIn");
  React.useEffect(() => {
    setTimeout(() => {
        setAnimation('fadeOut');
    }, duration);
  });
  return (
    <SnackBarContainer placement={placement}>
      <SnackBarInner error={error} layout={layout} animation = {animation}>
        {icon && <Icon>{icon}</Icon>}
        <Text>{text}</Text>
        {action && <Action>{action.toUpperCase()}</Action>}
      </SnackBarInner>
    </SnackBarContainer>
  );
};

Snackbar.defaultProps = {
  icon: null,
  action: null,
  error: false,
  placement: "left",
  layout: "mobile",
  duration: 4000,
};

export default Snackbar;
