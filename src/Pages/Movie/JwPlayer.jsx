import React from 'react';
import moviePoster from '../../assets/banner.jpg';
// import movieVideo from '../../assets/movie.mp4';
const JwPlayer = ({ currentMovieDetail }) => {
    console.log(currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterUrl = bannerImage || moviePoster;

    return (
        <div>

            <video
                id="my-video"
                class="video-js"
                controls
                preload="auto"
                // width="640"
                // height="164"
                style={{
                    width: '100%',
                    height: '500px',
                    // height: 'auto',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                    backgroundPosition: '100% 100%',
                    backgroundImage: `url(${posterUrl})`,
                    backgroundColor: '#0000008a',
                    objectFit: 'contain',
                }}
                poster={
                    currentMovieDetail?.poster_path
                        ?
                        posterUrl
                        :
                        moviePoster

                }
                src='https://drive.google.com/file/d/1AiKk9mAAdEQALCXwxUO-rqwY9NzvAWre/view'
                data-setup="{ }"
            >
            </video>
        </div >
    );
};

export default JwPlayer;