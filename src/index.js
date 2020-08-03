import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

const App = () => {
	const todoData = [
		{
			label: 'Drink coffee',
			important: false,
			id: 1,
		},
		{
			label: 'Sleep',
			important: false,
			id: 2,
		},
		{
			label: 'GoGoGo',
			important: true,
			id: 3,
		},
		{
			label: 'Fly',
			important: false,
			id: 4,
		},
	];

	return (
		<div className="d-flex flex-column align-items-center">
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
