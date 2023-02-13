import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import HomeSlider from '../HomeSlider/HomeSlider';
import TopRated from '../TopRated/TopRated';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <HomeSlider></HomeSlider>
            <HeroSlider></HeroSlider>
            <Upcoming></Upcoming>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;