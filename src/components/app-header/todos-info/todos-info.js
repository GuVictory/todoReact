import React from 'react';

const TodosInfo = ({ todo, done }) => {
	return (
		<span className="text-monospace d-inline-flex">
			{todo} more to do, {done} done
		</span>
	);
};

export default TodosInfo;
