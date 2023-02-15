import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import download from '../../../../assets/play-removebg-preview.png';

const Comming = ({ upcoming }) => {
    return (
        <div>
            <div className="shadow-xl border-2 rounded-[6px] border-slate-700 overflow-hidden">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={
                            (upcoming?.backdrop_path)
                                ?
                                `https://image.tmdb.org/t/p/w500` + upcoming?.backdrop_path
                                :
                                download

                        } alt="Shoes" className='w-full brightness-50 h-[300px] object-cover' />
                    </figure>

                    <Link to={`/movie/${upcoming?.id}`}>
                        <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200">
                            <span>Rating: {upcoming?.vote_average}</span>
                            <p>popularity: {upcoming?.popularity}</p>
                            <p>Release Date: {upcoming?.release_date}</p>
                            <FaYoutube className='inline-block text-7xl ml-20 mt-9 text-rose-500' />
                        </div>
                    </Link>

                </div>
            </div>
            <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-300'>{upcoming?.original_title}</p>
        </div>
    );
};

export default Comming;