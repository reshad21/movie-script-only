import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import CardSkeleton from '../../Shared/CardSkelton/CardSkeleton';
import Popular from '../Home/HeroSlider/Popular/Popular';

const AllMovies = () => {
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
            <div className='dark:bg-[#3d4451] bg-white grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-between h-fit p-4 px-28 mt-20'>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
            </div>
        )
    }
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-5 text-2xl inline-block rounded p-2 text-slate-600 dark:text-slate-200'>Latest Movies</h1>
                <span className='text-green-500 inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-3 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3">
                {


                    populars.map((popular) => <Popular popular={popular} key={popular.id}></Popular>)


                }
            </div>
        </div>
    );
};

export default AllMovies;