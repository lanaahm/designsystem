import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface SwitcherSkeletonProps {
  style: React.CSSProperties;
}



const SwitcherSkeleton: React.FC<SwitcherSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="45px" height="24px" />
    </>
  );
};



export default SwitcherSkeleton;