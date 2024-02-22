'use client'

import { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";

export default function Home() {
	const activeTodoKey: string = "activeTodos";
	const completedTodoKey: string = "completedTodos";

	const [allTodos, setAllTodos] = useState<any[]>([]);

	useEffect(() => {
		setAllTodos(JSON.parse(localStorage.getItem(activeTodoKey)!));
	}, [])

	return (
		<div className="m-4">
			<h1 className="text-4xl m-2 p-3">Open Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{allTodos &&
					allTodos.map((todo, index) => (
						todo.status === 'Open' && <TodoCard key={index} index={index} todo={todo} />
					))}
			</div>

			<h1 className="text-4xl m-2 p-3">Closed Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{allTodos &&
					allTodos.map((todo, index) => (
						todo.status === 'Closed' && <TodoCard key={index} index={index} todo={todo} />
					))}
			</div>
		</div>
	);
}
