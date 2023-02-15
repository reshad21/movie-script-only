import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopRated from './TopRated';

const TopRatedShow = () => {
    const { data: topShows = [], isLoading } = useQuery({
        queryKey: ['topShows'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })

    console.log(topShows);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }
    return (
        <div className='mb-[200px]'>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-4 text-2xl inline-block rounded p-2 text-slate-200'>Top Rated Tv Show</h1>
                <span className='text-green-500 inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>
            <Swiper
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
                    topShows?.map(topShow => <SwiperSlide><TopRated topShow={topShow} key={topShow?.id}></TopRated></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TopRatedShow;