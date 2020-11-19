import * as React from "react";
import styled, { keyframes } from "styled-components";
// import PropTypes from "prop-types";


export interface MenuProps {
  opened?: boolean;
  style?: React.CSSProperties;
}

const toggleOpen = keyframes`
from {
  transform: scale(0.9);
}

to {
  transform: scale(1);
}
`;

const toggleClose = keyframes`
from {
  transform: scale(1);
}

to {
  transform: scale(0);
}
`;

const MenuContainer = styled("div")`
  position: absolute;
  width: 200px;
  background: #fff;
  box-shadow: inset -1px -1px 0px rgba(20, 48, 69, 0.16);
  border-radius: 2px;
  transform-origin: top left;
  animation: ${toggleOpen} 0.2s ease;
  ${({ opened }) => opened && "display:none;"}
`;

const MenuUnorderedList = styled("div")`
  & div:first-child {
    padding-top: 16px;
  }
  & div:last-child {
    padding-bottom: 16px;
  }
  & div {
    user-select: none;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
  }
`;

const Menu: React.FC<MenuProps> = ({ opened, children, ...rest }) => {
  return (
    <>
      <MenuContainer opened={opened}>
        <MenuUnorderedList>{children}</MenuUnorderedList>
      </MenuContainer>
    </>
  );
};

Menu.defaultProps = {
  opened: false,
};

export default Menu;
