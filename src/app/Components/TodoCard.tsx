import React from 'react'

interface TodoProp {
    index: number,
    todo: Record<string , any>
}

const TodoCard: React.FC<TodoProp> = ({ index , todo }) => {
    const activeTodoKey: string = "activeTodos";
    const completedTodoKey: string = "completedTodos";
    
    const markComplete = () : void => {
        
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

                <button onClick={markComplete}>Close Task</button>
            </div>
        </div>
    )
}

export default TodoCard