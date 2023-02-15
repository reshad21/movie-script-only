import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { FaAngleDoubleRight, FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import TvShow from '../TvShow/TvShow';

import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
const PopularTvShow = () => {
    const swiperRef = useRef();

    // const API_KEY = process.env.REACT_APP_apiKey;
    const { data: tvShows = [], isLoading } = useQuery({
        queryKey: ['tvShows'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })

    // console.log(tvShows);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }
    return (
        <div className='relative '>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-4 text-2xl inline-block rounded p-2 text-slate-200'>Popular Tv Show</h1>
                <span className='text-green-500 inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>
            <Swiper
                modules={[Navigation]}
                // navigation={true}
                // style={{ marginLeft: '40px', marginRight: '40px', position: 'unset' }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="mySwiper"
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    tvShows?.map(tvshow => <SwiperSlide><TvShow tvshow={tvshow} key={tvshow?.id}></TvShow></SwiperSlide>)
                }
            </Swiper>
            <div className='customize__navigation absolute top-7 right-3 text-3xl font-light text-slate-300'>
                <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
            </div>
        </div>

    );
};

export default PopularTvShow;