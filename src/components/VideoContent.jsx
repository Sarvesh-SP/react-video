import "./VideoContent.css";
import React from "react";

const VideoContent = (props) => {
	return (
		<div
			className="video-content item"
			onClick={() => props.onVideoSelect(props.video)}
		>
			<img
				className="ui image"
				src={props.video.snippet.thumbnails.medium.url}
				alt={props.video.snippet.title}
			/>
			<div className="content">
				<div className="header">{props.video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoContent;
