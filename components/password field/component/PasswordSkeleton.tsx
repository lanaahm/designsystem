import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface PasswordSkeletonProps {
  style: React.CSSProperties;
}



const PasswordSkeleton: React.FC<PasswordSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="280px" height="48px" />
    </>
  );
};



export default PasswordSkeleton;