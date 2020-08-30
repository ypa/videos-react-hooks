import React from 'react';
import VideoItem from './VideoItem';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    return <div>{video.snippet.title}</div>;
};

export default VideoDetail;