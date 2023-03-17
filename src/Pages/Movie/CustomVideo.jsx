import React from 'react';
import Iframe from 'react-iframe';
import moviePoster from '../../assets/banner.jpg';

const CustomVideo = ({ currentMovieDetail }) => {
    console.log(currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterUrl = bannerImage || moviePoster;
    console.log(posterUrl);

    const style = {
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        backgroundPosition: '100% 100%',
        backgroundColor: '#0000008a',
        objectFit: 'contain',
        margin: '0 auto',
        border: '5px solid #0f172a',
        // zIndex: -1,


    }

    return (
        <div className='relative'>

            <Iframe src='//ok.ru/videoembed/4842880174625'
                width="80%"
                height="500px"
                id=""
                className=""
                display="block"
                position="relative"
                styles={style}
                poster={posterUrl}

            />
            {/* <img src={posterUrl} alt="" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' /> */}
        </div>
    );
};

export default CustomVideo;