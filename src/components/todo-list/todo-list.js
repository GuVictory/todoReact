import React from 'react';
import TodoListItem from './todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {
	const elements = todos.map((item) => {
		// {... item} -> разложение при помощи спред оператора
		const { id, ...itemProps } = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
			</li>
		);
	});

	return <ul className="list-group todo-list mw-50 py-2">{elements}</ul>;
};

export default TodoList;
