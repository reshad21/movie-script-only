import React, { useContext } from 'react';
import { FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import download from '../../../assets/download.png';
import banner from '../../../assets/banner.jpg';
import { AuthContext } from '../../../Pages/Context/AuthProvider';
import CardSkeleton from '../../CardSkelton/CardSkeleton';
const ShowSearch = () => {

    const { data, loading } = useContext(AuthContext);
    const { results } = data;
    console.log(results);

    if (loading) {
        return (
            <div className='dark:bg-[#3d4451] bg-white grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-between h-fit p-4 px-28 mt-20'>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
                <CardSkeleton></CardSkeleton>
            </div>
        )
    }

    if (results.length === 0) {
        return (
            <div className='dark:bg-[#3d4451] bg-white grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-between h-fit p-4 px-28 mt-20 relative'>
                <CardSkeleton>No data found</CardSkeleton>
                <p className='p-2 absolute top-[28px] left-[115px] z-10 inline-block w-[16%] h-fit font-bold text-red-800'>No Data Found...! Please Ensure Your Search...</p>
            </div>
        )
    }


    return (
        <>
            <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 pt-10 dark:bg-[#090833] dark:text-white'>
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
                                                    <FaYoutube className='inline-block text-7xl ml-[50px] mt-1 text-rose-500' />
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                    <p className='pl-2 pt-1 font-extralight text-[14px] text-slate-800 dark:text-slate-200'>
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

        </>
    );
};

export default ShowSearch;