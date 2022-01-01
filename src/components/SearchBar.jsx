import React from "react";

class SearchBar extends React.Component {
	state = { search: "" };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.callback(this.state.search);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.search}
							onChange={(e) =>
								this.setState({ search: e.target.value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
