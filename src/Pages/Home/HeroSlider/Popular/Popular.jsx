import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

import { FaStar, FaYoutube } from 'react-icons/fa';
import download from '../../../../assets/download.png';
const Popular = ({ popular }) => {
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

                        } alt="Shoes" className='w-full h-[300px] object-cover' />
                    </figure>

                    <Link to={`/movie/${popular?.id}/${popular?.original_title}`}>
                        <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200 bg-[#0000005b]">
                            <span>Rating: {popular?.vote_average} <FaStar className='star inline-block mb-1 text-yellow-600' /></span>
                            <p>popularity: {popular?.popularity}</p>
                            <p>Release Date: {popular?.release_date}</p>
                            <FaYoutube className='inline-block text-7xl ml-[50px] mt-1 text-[#ff0000]' />
                        </div>
                    </Link>

                </div>
            </div>
            <p className='pl-2 pt-1 dark:font-extralight text-[14px] text-slate-200'>{popular?.original_title}</p>
        </div>
    );
};

export default Popular;