import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Height } from "@material-ui/icons";

export interface SkeletonProps {
  width: String;
  height: String;
  style?: React.CSSProperties;
}

const SkeletonAnimation = styled.div`
    border-radius: 10px;
    background-color: #e2e5e7;
	 background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
	 background-size: 40px 100%;
	 background-repeat: no-repeat;
	 background-position: left -40px top 0;
	 animation: shine 1s ease infinite;
}
 @keyframes shine {
	 to {
		 background-position: right -40px top 0;
	}
`

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return (
    <>
      <SkeletonAnimation style={{width: width, height: height}} />
    </>
  );
};

Skeleton.defaultProps = {
  width: "150px",
  height: "50px",
};

export default Skeleton;
