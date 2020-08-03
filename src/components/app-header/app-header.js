import React from 'react';
import './app-header.css';
import TodosInfo from './todos-info';

const AppHeader = () => {
	return (
		<div className="d-flex align-items-end justify-content-between header">
			<span className="display-4 d-inline-flex">Todo List</span>
			<TodosInfo todo={12} done={3} />
		</div>
	);
};

export default AppHeader;
