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
  name?: string;
  hasDivider?: boolean;
  logo?: any;
  style?: React.CSSProperties;
}

export interface MenuSubItemProps {
  disabled?: boolean;
  onClick?: Function;
  hasDivider?: boolean;
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

const MenuUnorderedList = styled("ul")`
  margin: 0;
  padding: 0;
  & li:first-child {
    padding-top: 16px;
  }
  & li:last-child {
    padding-bottom: 16px;
  }
  & li {
    user-select: none;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
  }
  & li:hover ul {
    display: block; /* shows sub-sublist on hover */
    margin-left: 200px; /* this should be the same width as the parent list item */
    margin-top: -35px; /* aligns top of sub menu with top of list item */
  }
`;

const MenuItemList = styled("li")`
  display: block;
  position: relative;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  height: 100%;

  &:hover {
    background-color: rgba(196, 196, 196, 0.26);
    cursor: pointer;

    ${({ disabled }) => disabled && "cursor:default;background:transparent"}
  }

  color: ${themeGet("colors.primaryText", colors.primaryText)};

  ${({ disabled }) =>
    disabled && "color:rgba(20, 48, 69, 0.26);cursor:default;"}
`;
const MenuSubItemUl = styled("ul")`
  position: absolute;
  display: none;
  padding: 0;
  left: 0;
  list-style-type: none;
  width: 200px;
  background: #fff;
  box-shadow: inset -1px -1px 0px rgba(20, 48, 69, 0.16);
  border-radius: 2px;
  & li:first-child {
    padding-top: 16px;
  }
  & li:last-child {
    padding-bottom: 16px;
  }
  & li {
    user-select: none;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
  }
`;
const MenuSubItemList = styled("li")`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  height: 100%;

  &:hover {
    background-color: rgba(196, 196, 196, 0.26);
    cursor: pointer;

    ${({ disabled }) => disabled && "cursor:default;background:transparent"}
  }

  color: ${themeGet("colors.primaryText", colors.primaryText)};

  ${({ disabled }) =>
    disabled && "color:rgba(20, 48, 69, 0.26);cursor:default;"}
`;

const LogoList = styled("span")`
  margin-right: 8px;
`;

const MenuDivider = styled("hr")`
  margin:0;
  padding:0;
  border-top:1px solid rgb(0, 0, 0, 0.2);
  border-left:0px solid rgb(0, 0, 0, 0.5);
  border-right:0px solid rgb(0, 0, 0, 0.5);
  border-bottom:0px solid rgb(0, 0, 0, 0.5);
`;

const Menu: React.FC<MenuProps> & {
  Item: typeof MenuItem;
  SubItem: typeof MenuSubItem;
} = ({ opened, children, ...rest }) => {
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
  name,
  logo,
  onClick,
  children,
  style,
  hasDivider,
  ...rest
}) => {
  return (
    <>
      {hasDivider ? <MenuDivider /> : ""}
      <MenuItemList disabled={disabled} onClick={onClick} style={style}>
        {logo ? <LogoList>{logo}</LogoList> : ""}
        <span>{name}</span>
        <MenuSubItemUl>{children}</MenuSubItemUl>
      </MenuItemList>
    </>
  );
};

const MenuSubItem: React.FC<MenuSubItemProps> = ({
  disabled,
  logo,
  onClick,
  children,
  style,
  ...rest
}) => {
  return <MenuSubItemList disabled={disabled} onClick={onClick} style={style}>{children}</MenuSubItemList>;
};

Menu.Item = MenuItem;
Menu.SubItem = MenuSubItem;

Menu.defaultProps = {
  opened: false,
};

MenuItem.defaultProps = {
  disabled: false,
};

export default Menu;
