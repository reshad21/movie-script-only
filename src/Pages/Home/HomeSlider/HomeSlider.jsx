import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTv } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './HomeSlider.css';
const HomeSlider = () => {
    const { data: populars = [], isLoading } = useQuery({
        queryKey: ['populars'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60328c60edaea9ec7115178b6e8c7a3a`);
            const data = await res.json();
            return data.results;
        }
    })
    const imgUrl = 'https://image.tmdb.org/t/p/w500';


    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }
    return (

        <div className='homeSlider'>
            <Carousel
                showThumbs={false}
                transitionTime={3}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                className="heroSlider"
            >
                {
                    populars?.map(popular => {
                        return (
                            <div className='single__item text-slate-400' key={popular?.id}>
                                <img src={imgUrl + popular?.poster_path} alt="" />
                                <div className="single__description">
                                    <h2 className='font-semibold lg:text-3xl md:text-xl text-slate-200'>{popular?.original_title}</h2>
                                    <p>
                                        {
                                            (popular?.overview.length > 100)
                                                ?
                                                popular?.overview.slice(0, 100)
                                                :
                                                popular?.overview

                                        }
                                        ...
                                    </p>
                                    <span>Rating: {popular?.vote_average}</span>
                                    <p>popularity:{popular?.popularity}</p>
                                    <p className='pb-4'>Release Date: {popular.release_date}</p>
                                    <div className="call_to_action">
                                        <Link to={`/movie/${popular?.id}/${popular?.original_title}`}><button className='btn btn-success btn-outline border-[2px]'><FaTv className='' /> <span className='pl-2'>watch now</span></button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </Carousel>
        </div>
    );
};

export default HomeSlider;