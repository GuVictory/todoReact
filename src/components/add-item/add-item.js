import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
	state = {
		labelToAdd: '',
	};

	onLabelChange = (e) => {
		this.setState({ labelToAdd: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { onAddItem } = this.props;
		onAddItem(this.state.labelToAdd);
		this.setState({ labelToAdd: '' });
	};

	render() {
		return (
			<form className="d-flex justify-content-between add-item my-2" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control form-input mr-2"
					value={this.state.labelToAdd}
					placeholder="Some stuff to do?"
					onChange={this.onLabelChange}
				></input>
				<button type="submit" className="btn btn-outline-success d-flex-inline form-btn">
					Add Item
				</button>
			</form>
		);
	}
}
