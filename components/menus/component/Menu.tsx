import * as React from "react";
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { colors } from "../../_utils";

export interface MenuProps {
  opened?: boolean;
  style?: React.CSSProperties;
  Item?: any;
}

export interface MenuItemProps {
  disabled?: boolean;
  onClick?: Function;
  logo?: any;
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

const MenuItemList = styled("div")`
    display:flex;
    flex-direction:row;
    align-items:center;
    vertical-align:middle;
    height:100%;
    
  &:hover{
    background-color:rgba(196, 196, 196, 0.26);
    cursor:pointer;

    ${({ disabled }) => disabled && "cursor:default;background:transparent"}
  }

    color: ${themeGet("colors.primaryText", colors.primaryText)};
    
    ${({ disabled }) =>
      disabled && "color:rgba(20, 48, 69, 0.26);cursor:default;"}
  `;

const LogoList = styled("span")`
  margin-right: 8px;
`;

const Menu: React.FC<MenuProps> & { Item: typeof MenuItem } = ({ opened, children, ...rest }) => {
  return (
    <>
      <MenuContainer opened={opened}>
        <MenuUnorderedList>{children}</MenuUnorderedList>
      </MenuContainer>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  disabled,
  logo,
  onClick,
  children,
  style,
  ...rest
}) => {
  return (
    <>
      <MenuItemList disabled={disabled} onClick={onClick} style={style}>
        {logo ? <LogoList>{logo}</LogoList> : ""}
        <span>{children}</span>
      </MenuItemList>
    </>
  );
};

Menu.Item = MenuItem;

Menu.defaultProps = {
  opened: false,
};

MenuItem.defaultProps = {
  disabled: false,
};

export default Menu;
