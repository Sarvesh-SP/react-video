import axios from "axios";

export default axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: "AIzaSyC8QHfcufTffRhEa913L5-5SplQgA8aTh8",
	},
});
