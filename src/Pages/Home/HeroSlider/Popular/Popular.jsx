import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

import download from '../../../../assets/play-removebg-preview.png';
const Popular = ({ popular }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className="shadow-xl border-2 border-green-500 overflow-hidden">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={imgUrl + popular?.backdrop_path} alt="Shoes" className='w-full brightness-50 h-full' />
                    </figure>
                    <Link to={`/movie/${popular?.id}`}>
                        <img src={download} alt="download" className='absolute w-[15%] h-[30%] z-20 top-[50px] left-1/2 translate-x-[-50%]' />
                    </Link>
                    <Link to={`/movie/${popular?.id}`}>
                        <div className="info  p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition">
                            <h2 className='font-bold'>{popular?.original_title}</h2>
                            <span>Rating: {popular?.vote_average}</span>
                            <p>popularity:{popular?.popularity}</p>
                            <p>Release Date: {popular.release_date}</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Popular;