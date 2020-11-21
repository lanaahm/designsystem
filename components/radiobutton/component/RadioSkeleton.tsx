import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface RadioSkeletonnProps {
  style: React.CSSProperties;
}



const RadioSkeleton: React.FC<RadioSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="100px" height="16px" />
    </>
  );
};



export default RadioSkeleton;