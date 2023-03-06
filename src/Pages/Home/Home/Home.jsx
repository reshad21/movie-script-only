import React from 'react';
import Addsterra from '../../Addsterra/Addsterra';
import DIvider from '../DIvider/DIvider';
import Populers from '../HeroSlider/Populers';
import HomeSlider from '../HomeSlider/HomeSlider';
import PopularTvShow from '../PopularTvShow/PopularTvShow';
import TodayAringShow from '../TodayAringShow/TodayAringShow';
import TopRated from '../TopRated/TopRated';
import TopRatedShow from '../TopRatedShow/TopRatedShow';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 pt-10 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <HomeSlider></HomeSlider>
            <Populers></Populers>
            <Upcoming></Upcoming>
            <TopRated></TopRated>
            <DIvider></DIvider>
            <PopularTvShow></PopularTvShow>
            <TodayAringShow></TodayAringShow>
            <TopRatedShow></TopRatedShow>
            <Addsterra></Addsterra>
        </div>
    );
};

export default Home;