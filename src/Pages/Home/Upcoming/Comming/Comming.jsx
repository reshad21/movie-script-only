import React from 'react';
import { Link } from 'react-router-dom';
import download from '../../../../assets/play-removebg-preview.png';

const Comming = ({ upcoming }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div>
            <div className="shadow-xl border-2 border-green-500 overflow-hidden">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={imgUrl + upcoming?.backdrop_path} alt="Shoes" className='w-full brightness-50 h-full' />
                    </figure>
                    <Link to={`/movie/${upcoming?.id}`}>
                        <img src={download} alt="download" className='absolute w-[15%] h-[30%] z-20 top-[50px] left-1/2 translate-x-[-50%]' />
                    </Link>
                    <Link to={`/movie/${upcoming?.id}`}>
                        <div className="info  p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition">
                            <h2 className='font-bold'>{upcoming?.original_title}</h2>
                            <span>Rating: {upcoming?.vote_average}</span>
                            <p>popularity:{upcoming?.popularity}</p>
                            <p>Release Date: {upcoming.release_date}</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Comming;