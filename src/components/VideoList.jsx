import React from "react";
import VideoContent from "./VideoContent";

const VideoList = (props) => {
	const vids = props.videos.map((vid) => {
		return (
			<VideoContent
				key={vid.id.videoId}
				onVideoSelect={props.onVideoSelect}
				video={vid}
			/>
		);
	});

	return <div className="ui relaxed divided list">{vids}</div>;
};

export default VideoList;
