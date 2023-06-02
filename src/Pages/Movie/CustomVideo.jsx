import React from 'react';
import Iframe from 'react-iframe';
import moviePoster from '../../assets/banner.jpg';

const CustomVideo = ({ currentMovieDetail, videoId }) => {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterUrl = bannerImage || moviePoster;
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;


    return (
        <div className='relative'>

            <Iframe
                src={videoUrl}
                width="100%"
                height="600px"
                id=""
                className="mx-auto border-4 border-[#13005A]"
                display="block"
                // styles={style}
                poster={posterUrl}

            />
        </div>
    );
};

export default CustomVideo;