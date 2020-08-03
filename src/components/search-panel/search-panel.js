import React from 'react';
import SearchFilterBtns from './search-panel-btns';
import './search-panel.css';

const SearchPanel = () => {
	const searchStyle = {
		fontSize: '1.5em',
	};
	return (
		<div className="d-flex justify-content-between search-panel py-3">
			<input placeholder="search" style={searchStyle} className="form-control" />
			<SearchFilterBtns />
		</div>
	);
};

export default SearchPanel;
