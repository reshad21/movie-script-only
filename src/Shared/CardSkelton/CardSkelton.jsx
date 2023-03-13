import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const CardSkelton = () => {
    return (
        <div className='shadow-xl'>
            <SkeletonTheme baseColor="#cccccc" highlightColor="#e3e3e3">
                <Skeleton height={300} width={600} />
            </SkeletonTheme>
        </div>
    );
};

export default CardSkelton;