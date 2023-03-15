import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { FaAngleDoubleRight, FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import Popular from './Popular/Popular';

import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import CardSkeleton from '../../../Shared/CardSkelton/CardSkeleton';
const Populers = () => {
    const swiperRef = useRef();

    // const API_KEY = process.env.REACT_APP_apiKey;

    const { data: populars = [], isLoading } = useQuery({
        queryKey: ['populars'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })


    // console.log(populars);

    if (isLoading) {
        return (
            <div className='dark:bg-[#3d4451] bg-white grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-between h-fit p-4 px-0'>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
            </div>
        )
    }

    return (
        <div className='mb-4 relative'>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-5 text-2xl inline-block rounded p-2 text-slate-600 dark:text-slate-200'>Popular Movies</h1>
                <span className='text-green-500 inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>

            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="my-swiper"
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1000: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}
            >
                {


                    populars.map((popular) => <SwiperSlide><Popular popular={popular} key={popular.id}></Popular></SwiperSlide>)


                }


            </Swiper>
            <div className='customize__navigation absolute top-7 right-3 text-3xl font-light text-slate-600 dark:text-slate-200'>
                <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
            </div>

        </div>
    );
};

export default Populers;