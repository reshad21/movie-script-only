import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import JwPlayer from './JwPlayer';
import './Movie.css';

const Movie = () => {

    const API_KEY = '60328c60edaea9ec7115178b6e8c7a3a';
    const { id } = useParams();
    const { data: currentMovieDetail = [], isLoading } = useQuery({
        queryKey: ['currentMovieDetail', id],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            return data;
        }
    })

    // console.log(currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterImage = imgUrl + currentMovieDetail?.poster_path;
    console.log(posterImage);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='lg:px-24 md:px-4 px-2 py-20 mt-12 dark:bg-[#3d4451] dark:text-white movie'>
            <JwPlayer currentMovieDetail={currentMovieDetail} key={currentMovieDetail?.posterImage}></JwPlayer>
            <div className="action__btn my-4">
                <button>Watch now</button>
                <button>Download now</button>
            </div>
        </div>
    );
};

export default Movie;