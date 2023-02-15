import React from 'react';
import moviePoster from '../../assets/banner.jpg';
import movieVideo from '../../assets/movie.mp4';
const JwPlayer = ({ currentMovieDetail }) => {
    console.log(currentMovieDetail);

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;
    const posterImage = imgUrl + currentMovieDetail?.poster_path;
    console.log(posterImage);

    return (
        <div>
            <video
                id="my-video"
                class="video-js"
                controls
                preload="auto"
                width="640"
                height="264"
                poster={bannerImage ? bannerImage : moviePoster}
                data-setup="{}"
            >
                <source src={movieVideo} type="video/mp4" />
                <source src="MY_VIDEO.webm" type="video/webm" />
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer"
                    >supports HTML5 video</a
                    >
                </p>
            </video>
        </div>
    );
};

export default JwPlayer;