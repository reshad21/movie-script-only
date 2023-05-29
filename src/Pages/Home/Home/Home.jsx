import React from 'react';
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
        <div className='lg:px-24 md:px-4 px-2 pb-0 pt-10 mt-12 bg-[#090833] text-white'>
            <HomeSlider></HomeSlider>
            <Populers props={"Popular Movies"}></Populers>
            <Upcoming></Upcoming>
            <TopRated props={"Toprated Movies"}></TopRated>
            <DIvider></DIvider>
            <PopularTvShow></PopularTvShow>
            <TodayAringShow></TodayAringShow>
            <TopRatedShow></TopRatedShow>
            {/* <Addsterra></Addsterra> */}
        </div>
    );
};

export default Home;