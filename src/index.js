import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

class App extends Component {
	state = {
		todoData: [
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
		],
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const ind = todoData.findIndex((el) => el.id === id);

			return { todoData: [...todoData.slice(0, ind), ...todoData.slice(ind + 1)] };
		});
		console.log(this.state.todoData);
	};

	render() {
		const { todoData } = this.state;

		return (
			<div className="d-flex flex-column align-items-center">
				<AppHeader />
				<SearchPanel />
				<TodoList
					todos={todoData}
					onDeleted={(id) => {
						this.deleteItem(id);
					}}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
