import * as React from "react";
import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { colors } from "../../_utils";

export interface MenuItemProps {
  disabled?: boolean;
  onClick?: Function;
  logo?: any;
  style?: React.CSSProperties;
}

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

MenuItem.defaultProps = {
  disabled: false,
};

export default MenuItem;
