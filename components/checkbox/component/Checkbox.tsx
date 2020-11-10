import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./checkbox.css";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  handleChange?: Function;
  style?: React.CSSProperties;
}
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "salmon" : "green")}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, handleChange }) => {
  return (
    <>
      <label className="container-checkbox">C
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      {/* <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={handleChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer> */}
    </>
  );
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
