import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./checkbox.css";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  label?: String;
  handleChange?: Function;
  style?: React.CSSProperties;
}


const Checkbox: React.FC<CheckboxProps> = ({ checked, handleChange, label }) => {
  return (
    <>
      <label className="container-checkbox loading">
        {label}
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </>
  );
};

Checkbox.defaultProps = {
  checked: false,
  label: "Checkbox"
};

export default Checkbox;
