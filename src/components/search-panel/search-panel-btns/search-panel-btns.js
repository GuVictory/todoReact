import React, { Component } from 'react';

export default class SearchFilterBtns extends Component {
	render() {
		return (
			<div className="btn-group d-inline-flex ml-2" role="group">
				<button type="button" className="btn btn-success">
					All
				</button>
				<button type="button" className="btn btn-outline-secondary">
					Active
				</button>
				<button type="button" className="btn btn-outline-secondary">
					Done
				</button>
			</div>
		);
	}
}
