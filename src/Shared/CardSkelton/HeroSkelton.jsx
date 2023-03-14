import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkelton = () => {
    return (
        <div>
            <div className='shadow-xl'>
                <SkeletonTheme baseColor="#cccccc" highlightColor="#e3e3e3">
                    <Skeleton height={460} style={{ width: '100%' }} />
                </SkeletonTheme>
            </div>
        </div>
    );
};

export default HeroSkelton;