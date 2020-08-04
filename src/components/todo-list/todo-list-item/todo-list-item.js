import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
	state = {
		done: false,
		important: this.props.important,
	};

	render() {
		const { label, done, important, onDeleted, onToggleImportant, onToggleDone } = this.props;

		let classNames = 'todo-list-item d-flex-inline';
		classNames += done ? ' done' : '';
		classNames += important ? ' important' : '';

		return (
			<div className="d-flex align-items-center justify-content-between">
				<span className={classNames} onClick={onToggleDone}>
					{label}
				</span>
				<div className="d-flex-inline">
					<button type="button" className="btn btn-outline-danger mr-2" onClick={onDeleted}>
						<i className="fa fa-trash-o todo-list-item-icon" />
					</button>
					<button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
						<i className="fa fa-exclamation todo-list-item-icon" />
					</button>
				</div>
			</div>
		);
	}
}
