import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {

    return (
        <>
            {videos.map((video) => (
                <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />))}
        </>
    );
};

export default VideoList;