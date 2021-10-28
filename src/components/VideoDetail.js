import React from "react";
import { Header, Segment, Embed } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>
    }


    const renderVideoDetail = (video) => {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <Embed allowFullScreen placeholder={video.snippet.thumbnails.high.url}>
                    <iframe src={videoSrc} title="Video player" />
                </Embed>
                <Segment>
                    <Header>{video.snippet.title}</Header>
                    <p>{video.snippet.description}</p>
                </ Segment>
            </div>
        );
    }

    return (
        <Segment basic>
            {renderVideoDetail(video)}
        </Segment>

    )


};

export default VideoDetail;
