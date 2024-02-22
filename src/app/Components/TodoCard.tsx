import React from 'react'

interface TodoProp {
    index: number,
    todo: Record<string, any>,
    onComplete: (index: number) => void,
    onReopen: (index: number) => void
}

const TodoCard: React.FC<TodoProp> = ({ index, todo, onComplete, onReopen }) => {
    const activeTodoKey: string = "activeTodos";
    const completedTodoKey: string = "completedTodos";

    const handleChange = () => {
        if (todo.status === "Open") {
            onComplete(index);
        } else {
            onReopen(index);
        }
    }

    return (
        <div>
            <div className="todo mx-auto max-w-md mb-4 p-4 rounded-md shadow-md border text-center bg-[#ACE1AF]">
                <h1 className="text-2xl font-bold mb-2">{todo.heading}</h1>
                {todo.description && (
                    <p className="text-gray-700 mb-1">
                        <span className="font-bold">Description:</span> {todo.description}
                    </p>
                )}
                {todo.tag && (
                    <p className="text-gray-700">
                        <span className="font-bold">Tags: <span className='text-red-700'>{todo.tag}</span></span>
                    </p>
                )}

                <button
                    onClick={handleChange}
                    className='border-solid border-2 px-2 m-1 border-slate-900 rounded-md'
                >
                    {todo.status === 'Open' ? 'Close Task' : 'Reopen Task'}
                </button>

            </div>
        </div>
    )
}

export default TodoCard