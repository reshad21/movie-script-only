import { useQuery } from '@tanstack/react-query';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Comming from './Comming/Comming';

const Upcoming = () => {
    // const API_KEY = process.env.REACT_APP_apiKey;
    const { data: upcomings = [], isLoading } = useQuery({
        queryKey: ['upcomings'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })

    console.log(upcomings);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <h1 className='my-4 text-2xl inline-block rounded p-2'>Upcoming Movies <span className='text-green-500'></span></h1>

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
                    upcomings?.map(upcoming => <SwiperSlide><Comming upcoming={upcoming} key={upcoming?.id}></Comming></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Upcoming;