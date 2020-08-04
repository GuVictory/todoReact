import React from 'react';
import './app-header.css';
import TodosInfo from './todos-info';

const AppHeader = (props) => {
	const { done, todo } = props;
	return (
		<div className="d-flex align-items-end justify-content-between header">
			<span className="display-4 d-inline-flex">Todo List</span>
			<TodosInfo todo={todo} done={done} />
		</div>
	);
};

export default AppHeader;
