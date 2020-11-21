import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface TextAreaSkeletonProps {
  style: React.CSSProperties;
}



const TextAreaSkeleton: React.FC<TextAreaSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="440px" height="120px" />
    </>
  );
};



export default TextAreaSkeleton;
