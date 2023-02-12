import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import HomeSlider from '../HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <HomeSlider></HomeSlider>
            <HeroSlider></HeroSlider>
        </div>
    );
};

export default Home;