import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardSkeleton = () => {
    return (
        <div className='shadow-xl'>
            <SkeletonTheme baseColor="#cccccc" highlightColor="#e3e3e3">
                <Skeleton height={260} width={250} />
                <Skeleton></Skeleton>
            </SkeletonTheme>
        </div>
    );
};

export default CardSkeleton;