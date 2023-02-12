import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

import download from '../../../../assets/2.png';
const Popular = ({ popular }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className="card shadow-xl border-2 border-green-500">
                <div className='relative'>
                    <figure className='rounded-t-[12px] ml-[-1px]'>
                        <img src={imgUrl + popular?.backdrop_path} alt="Shoes" className='w-full brightness-50' />
                    </figure>
                    <Link to={`/movie/${popular?.id}`}>
                        <img src={download} alt="download" className='absolute w-1/4 h-[40%] z-20 top-[40px] left-1/2 translate-x-[-50%]' />
                    </Link>
                </div>

                <div className="card-body">
                    <h2 className="card-title text-xl">
                        {popular?.original_title}
                    </h2>
                    <p>
                        {
                            (popular?.overview.length > 120)
                                ?
                                <>{popular?.overview.slice(0, 120)} ...</>
                                :
                                popular?.overview
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;