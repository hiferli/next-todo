'use client'

import { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";

export default function Home() {
	const activeTodoKey: string = "activeTodos";
	const completedTodoKey: string = "completedTodos";
	
	const [allActiveTodos, setAllActiveTodos] = useState<any[]>([])
	const [allCompletedTodos, setAllCompletedTodos] = useState<any[]>([]);
	
	const handleComplete = (index : number) : void => {
		const updatedTodos = [...allActiveTodos];
		const completedTodo = updatedTodos.splice(index, 1)[0];
		completedTodo.status = "Closed";
		
		// Update completedTodos
		const completedTodos = JSON.parse(localStorage.getItem(completedTodoKey)!) || [];
		completedTodos.push(completedTodo);
		localStorage.setItem(completedTodoKey, JSON.stringify(completedTodos));
		
		// Update activeTodos
		localStorage.setItem(activeTodoKey, JSON.stringify(updatedTodos));
		
		// Update state to trigger re-render
		setAllActiveTodos(updatedTodos);
		setAllCompletedTodos(completedTodos);
	}
	
	const handleReopen = (index: number): void => {
		const updatedTodos = [...allCompletedTodos];
		const reopenedTodo = updatedTodos.splice(index, 1)[0];
		reopenedTodo.status = "Open";

		// Update activeTodos
		const activeTodos = JSON.parse(localStorage.getItem(activeTodoKey)!) || [];
		activeTodos.push(reopenedTodo);
		localStorage.setItem(activeTodoKey, JSON.stringify(activeTodos));

		// Update completedTodos
		localStorage.setItem(completedTodoKey, JSON.stringify(updatedTodos));

		// Update state to trigger re-render
		setAllActiveTodos(activeTodos);
		setAllCompletedTodos(updatedTodos);
	}
	
	useEffect(() => {
		setAllActiveTodos(JSON.parse(localStorage.getItem(activeTodoKey)!));
		setAllCompletedTodos(JSON.parse(localStorage.getItem(completedTodoKey)!));
	}, [])

	return (
		<div className="m-4">
			<h1 className="text-4xl m-2 p-3">Open Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{allActiveTodos &&
					allActiveTodos.map((todo, index) => (
						todo.status === 'Open' && <TodoCard key={index} index={index} todo={todo} onComplete={handleComplete} onReopen={handleReopen} />
					))}
			</div>

			<h1 className="text-4xl m-2 p-3">Closed Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{allCompletedTodos &&
					allCompletedTodos.map((todo, index) => (
						todo.status === 'Closed' && <TodoCard key={index} index={index} todo={todo} onComplete={handleComplete} onReopen={handleReopen} />
					))}
			</div>
		</div>
	);
}
