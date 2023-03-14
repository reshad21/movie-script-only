import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Iframe from 'react-iframe';
import { useParams } from 'react-router-dom';
import CardSkeltonPlay from '../../Shared/CardSkelton/CardSkelton';
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

    console.log(currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    // const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterImage = imgUrl + currentMovieDetail?.poster_path;
    console.log(posterImage);

    if (isLoading) {
        return (
            <div className='bg-[#3d4451] flex items-end justify-center mt-[5rem] pt-[8px] pb-[270px]'>
                <CardSkeltonPlay></CardSkeltonPlay>
            </div>
        )
    }

    return (
        <div className='lg:px-24 md:px-4 px-2 py-20 mt-12 dark:bg-[#3d4451] dark:text-white movie'>
            <JwPlayer currentMovieDetail={currentMovieDetail} key={currentMovieDetail?.posterImage}></JwPlayer>
            <div className="action__btn my-5">
                <button className='btn btn-success btn-xl mx-2'>Watch now</button>
                <button className='btn btn-success btn-xl'>Download</button>
            </div>
            <div className="flex gap-3 bg-slate-900 p-3 rounded-lg">
                <div className=''>
                    <img src={posterImage} alt="" title='' />
                </div>

                <div className=''>
                    <div className='relative'>
                        <h1 className='text-[1.8rem]'>{currentMovieDetail?.original_title} <span className='text-[#8e9aa5] text-[50%]'>{currentMovieDetail?.release_date.slice(0, 4)}</span></h1>
                        <div className='border-2 border-green-500 absolute top-0 right-0 p-3 rounded w-[25%] text-center'>
                            <a href="https://everydaymovie.online/en/loading?id=315162&amp;title=Puss%20in%20Boots%3A%20The%20Last%20Wish">Subscribe to Watch | $0.00</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star-o text-muted"></i>
                            <i className="fa fa-star-o text-muted"></i>
                        </div>
                        <div>
                            <span>{currentMovieDetail?.vote_average}/10</span> <span>by {currentMovieDetail?.vote_count} users</span>
                        </div>
                    </div>
                    <div>
                        <p>{currentMovieDetail?.overview}</p>
                    </div>
                    <div>
                        <ul>
                            <li>Released: <span>{currentMovieDetail?.release_date}</span></li>
                            <li>Runtime: <span>{currentMovieDetail?.runtime} minutes</span></li>

                            <li>Genre: {currentMovieDetail?.genres.map(genre => <span>{genre.name}, </span>)}</li>


                            <li>production Companies: {currentMovieDetail?.production_companies.map(production => <span>{production?.name}, </span>)}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Iframe url="https://www.youtube.com/embed/MBOhKd6cIak"
                width="640px"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative" />
            {/* <div>
                <iframe
                    src="https://www.dropbox.com/s/eb14ow1bsq7alzw/Snapsave.app_10000000_726520415787177_1852203808638895267_n.mp4?dl=0&fbclid=IwAR06b0Al9hMC1FKPKaq1ZW4J3tMQAlA85b9HBTkaUCJUb15qSIS0OcYDoXs"
                    width="640"
                    height="360"
                    frameborder="0"
                    allowfullscreen
                />
            </div> */}


        </div>
    );
};

export default Movie;