import React, { Component } from 'react';

export default class SearchFilterBtns extends Component {
	state = {
		activeBtn: 0,
	};

	render() {
		return (
			<div className="btn-group d-inline-flex ml-2" role="group">
				<button
					type="button"
					className={`btn ${this.state.activeBtn === 0 ? 'btn-success' : 'btn-outline-secondary'}`}
					onClick={() => {
						this.setState({ activeBtn: 0 });
						this.props.onFilterChange(0);
					}}
				>
					All
				</button>
				<button
					type="button"
					className={`btn ${this.state.activeBtn === 1 ? 'btn-success' : 'btn-outline-secondary'}`}
					onClick={() => {
						this.setState({ activeBtn: 1 });
						this.props.onFilterChange(1);
					}}
				>
					Active
				</button>
				<button
					type="button"
					className={`btn ${this.state.activeBtn === 2 ? 'btn-success' : 'btn-outline-secondary'}`}
					onClick={() => {
						this.setState({ activeBtn: 2 });
						this.props.onFilterChange(2);
					}}
				>
					Done
				</button>
			</div>
		);
	}
}
