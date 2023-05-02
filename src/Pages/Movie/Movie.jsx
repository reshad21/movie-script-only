import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import CardSkeltonPlay from '../../Shared/CardSkelton/CardSkelton';
import demo from '../../assets/banner.jpg';
// import Addsterra from '../Addsterra/Addsterra';
import CustomVideo from './CustomVideo';
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

    // console.log("default image is", demo);
    // console.log("Found data", currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    const posterImage = imgUrl + currentMovieDetail?.poster_path;

    if (isLoading) {
        return (
            <div className='bg-[#090833] flex items-end justify-center mt-[5rem] pt-[8px] pb-[270px]'>
                <CardSkeltonPlay></CardSkeltonPlay>
            </div>
        )
    }

    return (
        <div className='lg:px-24 md:px-4 px-2 py-20 pt-[3rem] mt-12 bg-[#090833] text-white movie'>

            <div className="w-full shadow" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${posterImage})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: '100% 100%',
                backgroundSize: 'cover',
                backgroundPosition: '50% 100%',

            }}>
                <CustomVideo currentMovieDetail={currentMovieDetail} key={currentMovieDetail?.posterImage} videoId="1i0rsjnSAjD3NVCEi5cv2Kmo_gZSdH6AC"></CustomVideo>
            </div>

            {/* <Addsterra></Addsterra> */}


            <div className="action__btn my-5">
                <button className='btn bg-[#090833] btn-xl mx-2'>Watch now</button>
                <button className='btn bg-[#090833] btn-xl'>Download</button>
            </div>

            {
                currentMovieDetail
                    ?
                    (<div className="flex flex-col gap-3 lg:flex-row md:flex-row bg-slate-900 p-3 rounded-lg mb-20 w-full">
                        <div className='w-[100%] lg:w-[20%] md:w-[20%]'>

                            <img src={
                                (currentMovieDetail?.poster_path)
                                    ?
                                    posterImage
                                    :
                                    demo

                            } alt="posterimage" className='w-full' />


                        </div>

                        <div className='w-[100%] lg:w-[80%] md:w-[80%]'>
                            <div className='relative'>
                                <h1 className='text-[1.8rem]'>{currentMovieDetail?.original_title} <span className='text-[#8e9aa5] text-[50%]'>{
                                    ((currentMovieDetail?.release_date?.length > 5) || (currentMovieDetail?.first_air_date?.length > 5))
                                        ?
                                        currentMovieDetail?.release_date?.slice(0, 4) || currentMovieDetail?.first_air_date?.slice(0, 4)
                                        :
                                        currentMovieDetail?.release_date || currentMovieDetail?.first_air_date

                                }</span></h1>
                                <div className='border-2 border-[#9eac03] absolute top-10 lg:top-0 md:top-10 right-0 p-1 lg:p-3 md:p-2 rounded w-[35%] lg:w-[25%] md:w-[30%] text-center'>
                                    <a href="https://everydaymovie.online/en/loading?id=315162&amp;title=Puss%20in%20Boots%3A%20The%20Last%20Wish">Subscribe to Watch | $0.00</a>
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='flex gap-1'>
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaStar className='text-warning' />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div>
                                    <span className='text-[80%]'>{currentMovieDetail?.vote_average}/10</span> <span className='text-[80%]'>by {currentMovieDetail?.vote_count} users</span>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <p className='text-slate-400'>{currentMovieDetail?.overview}</p>
                            </div>
                            <div>
                                <ul>
                                    <li className='p-2 rounded bg-slate-800'><span className='text-slate-400'>Released</span>: <span>{currentMovieDetail?.release_date || currentMovieDetail?.first_air_date}</span></li>

                                    <li className='p-2 rounded'><span className='text-slate-400'>Runtime:</span> <span>{currentMovieDetail?.runtime} minutes</span></li>

                                    <li className='p-2 rounded bg-slate-800'><span className='text-slate-400'>Genre:</span> {currentMovieDetail?.genres?.map(genre => genre.name).join(', ')}</li>

                                    <li className='p-2 rounded'><span className='text-slate-400'>Popularity:</span> <span>{currentMovieDetail?.popularity} Likes</span></li>

                                    <li className='p-2 rounded bg-slate-800'><span className='text-slate-400'>production Companies:</span> {currentMovieDetail?.production_companies?.map(production => production.name).join(', ')}</li>

                                </ul>
                            </div>
                        </div>
                    </div>)
                    :
                    (<p>No data found</p>)
            }







        </div>
    );
};

export default Movie;