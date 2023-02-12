import { useQuery } from '@tanstack/react-query';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
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

            <div className="grid gap-10 px-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 md:px-4 md:gap-5 ">
                {
                    populars?.map((popular) => <Popular popular={popular} key={popular.id}></Popular>)
                }
            </div>
        </div>
    );
};

export default HeroSlider;