import * as React from "react";
import Skeleton from '../../skeleton/component/Skeleton'

export interface SearchSkeletonProps {
  style: React.CSSProperties;
}



const SearchSkeleton: React.FC<SearchSkeletonProps> = () => {
  return (
    <>
      <Skeleton width="280px" height="48px" />
    </>
  );
};



export default SearchSkeleton;