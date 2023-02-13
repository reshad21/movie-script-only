import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

import download from '../../../../assets/play-removebg-preview.png';
const Popular = ({ popular }) => {
    // const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className="shadow-xl border-2 rounded-[6px] border-slate-700 overflow-hidden">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={
                            (popular?.backdrop_path)
                                ?
                                `https://image.tmdb.org/t/p/w500` + popular?.backdrop_path
                                :
                                download

                        } alt="Shoes" className='w-full brightness-50 h-[300px] object-cover' />
                    </figure>

                    <Link to={`/movie/${popular?.id}`}>
                        <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200">
                            <span>Rating: {popular?.vote_average}</span>
                            <p>popularity: {popular?.popularity}</p>
                            <p>Release Date: {popular?.release_date}</p>
                        </div>
                    </Link>

                </div>
            </div>
            <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-300'>{popular?.original_title}</p>
        </div>
    );
};

export default Popular;