import { useQuery } from '@tanstack/react-query';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSlider.css';
import Popular from './Popular/Popular';
const HeroSlider = () => {

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
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="flex">
                <h1 className='my-8 font-bold text-2xl border-2 border-green-500 inline-block rounded p-2'>MOST TRENDING MOVIES: <span className='text-green-500'>{populars?.length}</span></h1>
            </div>

            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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


                    populars.map((popular) => <SwiperSlide> <Popular popular={popular} key={popular.id}></Popular></SwiperSlide>)


                }


            </Swiper>

        </div>
    );
};

export default HeroSlider;