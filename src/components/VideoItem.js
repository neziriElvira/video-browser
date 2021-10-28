import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';


const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <Segment onClick={() => handleVideoSelect(video)} color="blue">
            <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} bordered />
            <Header as="h5">
                {video.snippet.title}
            </Header>
        </Segment>
    )
};
export default VideoItem;