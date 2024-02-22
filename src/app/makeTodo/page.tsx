'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'

const MakeTodos = () => {
    const activeTodoKey: string = "activeTodos";

    const [formData, setFormData] = useState({
        heading: '',
        description: '',
        tag: '',
        status: 'Open'
    });
    
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const clearFormData = () => {
        setFormData({
            heading: '',
            description: '',
            tag: '',
            status: 'Open'
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();

        if(localStorage.getItem(activeTodoKey) === null){
            localStorage.setItem(activeTodoKey , JSON.stringify([]));
        }

        const currentTodos = JSON.parse(localStorage.getItem(activeTodoKey)!);
        currentTodos.push(formData);
        localStorage.setItem(activeTodoKey , JSON.stringify(currentTodos));

        clearFormData();
    }

    return (
        <div>
            <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="heading" className="block text-gray-600">Heading</label>
                    <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md border-red-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-600">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md border-red-400"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="tag" className="block text-gray-600">Tag</label>
                    <input
                        type="text"
                        id="tag"
                        name="tag"
                        value={formData.tag}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md border-red-400"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Todo
                </button>

            </form>

        </div>
    )
}

export default MakeTodos