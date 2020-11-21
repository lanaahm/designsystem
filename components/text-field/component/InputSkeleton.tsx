import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface InputSkeletonProps {
  style: React.CSSProperties;
}



const InputSkeleton: React.FC<InputSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="280px" height="50px" />
    </>
  );
};



export default InputSkeleton;