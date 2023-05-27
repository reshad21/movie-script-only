import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
const VideoJs = () => {
    return (
        <div>
            <Player poster="/path/to/poster-image.jpg">
                <source src="/path/to/video.mp4" />
            </Player>
        </div>
    );
};

export default VideoJs;