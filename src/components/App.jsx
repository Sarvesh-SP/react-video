import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { vids: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchSubmit("buildings");
	}

	onSearchSubmit = async (search) => {
		const response = await youtube.get("/search", {
			params: {
				q: search,
			},
		});

		this.setState({
			vids: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar callback={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.vids}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
