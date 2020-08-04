import React from 'react';
import SearchFilterBtns from './search-panel-btns';
import './search-panel.css';

const SearchPanel = (props) => {
	return (
		<div className="d-flex justify-content-between search-panel py-2">
			<input placeholder="search" className="form-control search-panel-input" />
			<SearchFilterBtns onFilterChange={props.onFilterChange} />
		</div>
	);
};

export default SearchPanel;
