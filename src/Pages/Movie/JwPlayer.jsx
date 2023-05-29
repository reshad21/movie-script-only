import React, { useRef, useState } from 'react';
// import moviePoster from '../../assets/banner.jpg';
import { BsPlayCircle } from 'react-icons/bs';
import { FaPauseCircle } from 'react-icons/fa';
import movieVideo from '../../assets/movie.mp4';


const JwPlayer = ({ currentMovieDetail, videoId }) => {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    // const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;
    // const videoUrl = "https://drive.google.com/file/d/1i0rsjnSAjD3NVCEi5cv2Kmo_gZSdH6AC/view?usp=sharing";
    // const videoUrl = `https://drive.google.com/uc?export=download&id=1i0rsjnSAjD3NVCEi5cv2Kmo_gZSdH6AC`;
    // const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
    // const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;



    // const posterImage = imgUrl + currentMovieDetail?.poster_path;
    const bannerImage = imgUrl + currentMovieDetail?.backdrop_path;


    // Create a ref to access the video element
    const videoRef = useRef(null);

    // State variable to track video playing status
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Function to start the video and update the playing status
    const startVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    // Function to pause the video and update the playing status
    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };



    return (
        <div className='w-full'>
            <video
                // autoPlay
                // onClick={}
                ref={videoRef}
                loop
                id="my-video"
                class="video-js"
                // controls
                preload="auto"
                poster={bannerImage}
                style={{
                    width: '100%',
                    height: '500px',
                    margin: "0 auto",
                    border: "5px solid #13005A",
                    objectFit: "cover",
                    position: "relative"
                }}
                data-setup="{ }"
            >
                <source src={movieVideo} type='video/webm'></source>
            </video>
            <div className="absolute top-[250px] left-[170px] md:top-[250px] md:left-[368px] lg:top-[250px] lg:left-[730px] w-[65px] h-[65px]">
                {!isVideoPlaying && (
                    <button onClick={startVideo}><BsPlayCircle className='w-[65px] h-[65px] block text-[#e6e101]' /></button>
                )}

                {isVideoPlaying && (
                    <button onClick={pauseVideo} className='opacity-5 hover:opacity-100 text-[#e6e101]'><FaPauseCircle className='w-[65px] h-[65px] block' /></button>
                )}
            </div>
        </div >
    );
};

export default JwPlayer;