import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { FaAngleDoubleRight, FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import Rated from './Rated';

import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import CardSkeleton from '../../../Shared/CardSkelton/CardSkeleton';

const TopRated = () => {
    const swiperRef = useRef();
    // const API_KEY = process.env.REACT_APP_apiKey;
    const { data: toprateds = [], isLoading } = useQuery({
        queryKey: ['toprateds'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })

    // console.log(toprateds);

    if (isLoading) {
        return (
            <div className='bg-[#090833] grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-between h-fit p-4 px-0'>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
            </div>
        )
    }
    return (
        <div className='relative'>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-4 text-2xl inline-block rounded p-2 text-slate-200'>Toprated Movies</h1>
                <span className='text-[#e6e101] inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>
            <Swiper
                modules={[Navigation]}
                // navigation={true}
                // style={{ marginLeft: '40px', marginRight: '40px', position: 'unset' }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    toprateds?.map(toprated => <SwiperSlide><Rated toprated={toprated} key={toprated.id}></Rated></SwiperSlide>)
                }
            </Swiper>
            <div className='customize__navigation absolute top-7 right-3 text-3xl font-light text-[#e6e101]'>
                <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
            </div>

        </div>
    );
};

export default TopRated;