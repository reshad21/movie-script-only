import React, { useRef } from 'react';

const UseRefPlayer = ({ currentMovieDetail, videoId }) => {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    }
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;


    const posterImage = imgUrl + currentMovieDetail?.poster_path;
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;

    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={handlePlay}>Play Now</button>
            </div>
            <div className="w-80% h-[300px] mx-auto">

                <video width="w-full" height="full" ref={videoRef} poster={bannerImage}>
                    <source src={videoUrl} />
                </video>
            </div>
        </>
    );
};

export default UseRefPlayer;