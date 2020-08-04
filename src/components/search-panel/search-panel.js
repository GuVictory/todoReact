import React, { Component } from 'react';
import SearchFilterBtns from './search-panel-btns';
import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		searchText: '',
	};

	onChange = (e) => {
		this.setState({ searchText: e.target.value });
		this.props.onSearchChange(e.target.value);
	};

	render() {
		const { onFilterChange } = this.props;
		return (
			<div className="d-flex justify-content-between search-panel py-2">
				<input
					placeholder="search"
					className="form-control search-panel-input"
					onChange={this.onChange}
					value={this.state.searchText}
				/>
				<SearchFilterBtns onFilterChange={onFilterChange} />
			</div>
		);
	}
}
