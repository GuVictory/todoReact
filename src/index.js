import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import AddItem from './components/add-item';

class App extends Component {
	maxId = 100;

	state = {
		todoData: [
			{
				label: 'Drink coffee',
				important: false,
				done: false,
				id: 1,
			},
			{
				label: 'Sleep',
				important: false,
				done: false,
				id: 2,
			},
			{
				label: 'GoGoGo',
				important: true,
				done: false,
				id: 3,
			},
			{
				label: 'Fly',
				important: false,
				done: false,
				id: 4,
			},
		],
		currentFilter: 0,
		doneCount: 0,
	};

	createTodoItem = (label) => {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		};
	};

	deleteItem = (id) => {
		this.setState(({ todoData, doneCount }) => {
			const ind = todoData.findIndex((el) => el.id === id);
			let newDoneCount = todoData[ind].done ? doneCount - 1 : doneCount;
			return {
				todoData: [...todoData.slice(0, ind), ...todoData.slice(ind + 1)],
				doneCount: newDoneCount,
			};
		});
		console.log(this.state.todoData);
	};

	addItem = (text) => {
		this.setState(({ todoData }) => {
			let newTodoData = [...todoData, this.createTodoItem(text)];
			return { todoData: newTodoData };
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			const ind = todoData.findIndex((el) => el.id === id);
			let newTodoData = [...todoData];
			newTodoData[ind].important = !todoData[ind].important;
			return { todoData: newTodoData };
		});
	};

	onToggleDone = (id) => {
		this.setState(({ todoData, doneCount }) => {
			const ind = todoData.findIndex((el) => el.id === id);
			let newTodoData = [...todoData];
			let newDoneCount = todoData[ind].done ? doneCount - 1 : doneCount + 1;

			newTodoData[ind].done = !todoData[ind].done;
			return {
				todoData: newTodoData,
				doneCount: newDoneCount,
			};
		});
	};

	filterData = (filterId) => {
		switch (filterId) {
			case 1:
				return this.state.todoData.filter((el) => !el.done);
			case 2:
				return this.state.todoData.filter((el) => el.done);
			default:
				return this.state.todoData;
		}
	};

	onFilterChange = (filterId) => {
		this.setState({ currentFilter: filterId });
	};

	render() {
		return (
			<div className="d-flex flex-column align-items-center">
				<AppHeader
					done={this.state.doneCount}
					todo={this.state.todoData.length - this.state.doneCount}
				/>
				<SearchPanel onFilterChange={this.onFilterChange} />
				<TodoList
					todos={this.filterData(this.state.currentFilter)}
					onDeleted={(id) => {
						this.deleteItem(id);
					}}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<AddItem
					onAddItem={(item) => {
						this.addItem(item);
					}}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
