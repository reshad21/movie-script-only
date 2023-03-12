import React, { useContext } from 'react';
import { FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import download from '../../../assets/download.png';
import banner from '../../../assets/banner.jpg';
import { AuthContext } from '../../../Pages/Context/AuthProvider';
const ShowSearch = () => {

    const { data } = useContext(AuthContext);
    const { results } = data;
    console.log(results);
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 pt-10 dark:bg-[#3d4451] dark:text-white'>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 sm:gap-2 lg:gap-4 gap-2'>
                {
                    results?.map(item => {
                        return (
                            <div className="">
                                <div className="shadow-xl border-2 rounded-[6px] border-slate-700 overflow-hidden">
                                    <div className='relative'>
                                        <figure className='rounded-t-[12px] ml-[-1px]'>
                                            <img src={
                                                (item?.backdrop_path)
                                                    ?
                                                    `https://image.tmdb.org/t/p/w500` + item?.backdrop_path
                                                    :
                                                    banner

                                            } alt="Shoes" className='w-full h-[300px] object-cover' />
                                        </figure>

                                        <Link to={`/movie/${item?.id}/${item?.title}`}>
                                            <div className="info p-3 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition text-slate-200 bg-[#0000005b]">
                                                <span>Rating: {item?.vote_average} <FaStar className='star inline-block mb-1 text-yellow-600' /></span>
                                                <p>popularity: {item?.popularity}</p>
                                                <p>Release Date: {item?.release_date}</p>
                                                <FaYoutube className='inline-block text-7xl ml-20 mt-9 text-rose-500' />
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                                <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-600 dark:text-slate-200'>
                                    {
                                        (item?.title)
                                            ?
                                            item?.title
                                            :
                                            item?.name
                                    }
                                </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ShowSearch;